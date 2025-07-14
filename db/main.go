package main

import (
	_ "embed"
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

func main() {
	app := pocketbase.New()
	isGoRun := strings.HasPrefix(os.Args[0], os.TempDir())

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
