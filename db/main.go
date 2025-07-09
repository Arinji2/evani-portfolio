package main

import (
	_ "embed"
	"encoding/json"
	"fmt"
	"log"
	"os"
	"strings"

	"github.com/arinji2/evani-db/api"
	_ "github.com/joho/godotenv/autoload"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/plugins/migratecmd"
)

//go:embed dist/keypairs.json
var keypairsData []byte
var KeyPairs map[string]string

func main() {
	app := pocketbase.New()
	isGoRun := strings.HasPrefix(os.Args[0], os.TempDir())

	if err := json.Unmarshal(keypairsData, &KeyPairs); err != nil {
		log.Fatal("Error parsing keypairs:", err)
	}

	frontendURL := os.Getenv("FRONTEND_URL")
	if frontendURL == "" {
		frontendURL = "http://localhost:3000"
		log.Println("No frontend URL specified, defaulting to", frontendURL)
	} else {
		log.Println("Frontend URL:", frontendURL)
	}

	secret := os.Getenv("SECRET")
	if secret == "" {
		log.Fatal("No secret specified")
	}

	migratecmd.MustRegister(app, app.RootCmd, migratecmd.Config{
		Automigrate: isGoRun,
	})

	app.OnServe().BindFunc(func(e *core.ServeEvent) error {
		fmt.Println("Server started! Initializing keys...")

		collection, err := app.FindCollectionByNameOrId("keys")
		if err != nil {
			log.Printf("Error finding collection: %v", err)
			return err
		}

		for keyName, keyValue := range KeyPairs {
			fmt.Printf("Checking key: %s\n", keyName)
			exists, err := app.FindRecordsByFilter(collection.Id, fmt.Sprintf("key='%s'", keyName), "", 1, 0)
			if err != nil {
				log.Printf("Error finding record: %v", err)
				continue
			}

			if len(exists) == 0 {
				log.Printf("Creating key: %s\n", keyName)
				record := core.NewRecord(collection)
				record.Set("key", keyName)
				record.Set("value", keyValue)

				if err := app.Save(record); err != nil {
					log.Printf("Error creating record: %v", err)
				}
			}
		}

		return e.Next()
	})

	app.OnRecordUpdateRequest("music").BindFunc(func(e *core.RecordRequestEvent) error {
		client := api.NewAPIClient(frontendURL)
		_, err := client.SendRequestWithQuery("GET", "/api/revalidate", map[string]string{"secret": secret}, map[string]string{})
		if err != nil {
			log.Printf("Revalidation error: %v", err)
		}
		return e.Next()
	})

	app.OnRecordCreateRequest("music").BindFunc(func(e *core.RecordRequestEvent) error {
		client := api.NewAPIClient(frontendURL)
		_, err := client.SendRequestWithQuery("GET", "/api/revalidate", map[string]string{"secret": secret}, map[string]string{})
		if err != nil {
			log.Printf("Revalidation error: %v", err)
		}
		return e.Next()
	})

	fmt.Println("Starting Server...")
	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
