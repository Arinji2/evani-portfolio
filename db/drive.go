package main

import (
	"bytes"
	"fmt"
	"image"
	_ "image/gif"
	_ "image/jpeg"
	_ "image/png"
	"io"
	"net/http"
	"time"
)

type ImageDimensions struct {
	Width  int
	Height int
}

func GetImageDimensionsFromDrive(fileID string) (ImageDimensions, error) {
	if fileID == "" {
		return ImageDimensions{}, fmt.Errorf("fileID is required")
	}

	client := &http.Client{
		Timeout: 30 * time.Second,
		CheckRedirect: func(req *http.Request, via []*http.Request) error {
			if len(via) >= 5 {
				return fmt.Errorf("too many redirects")
			}
			return nil
		},
	}

	driveURL := fmt.Sprintf("https://drive.google.com/uc?export=download&id=%s", fileID)
	req, err := http.NewRequest("GET", driveURL, nil)
	if err != nil {
		return ImageDimensions{}, fmt.Errorf("failed to create request: %v", err)
	}

	req.Header.Set("User-Agent", "Mozilla/5.0 (compatible; Go-Proxy/1.0)")

	resp, err := client.Do(req)
	if err != nil {
		return ImageDimensions{}, fmt.Errorf("failed to fetch file from Google Drive: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return ImageDimensions{}, fmt.Errorf("google drive returned status %d", resp.StatusCode)
	}

	// Use io.TeeReader to capture the stream while decoding
	var buf bytes.Buffer
	tee := io.TeeReader(resp.Body, &buf)

	config, _, err := image.DecodeConfig(tee)
	if err != nil {
		return ImageDimensions{}, fmt.Errorf("failed to decode image: %v", err)
	}

	return ImageDimensions{Width: config.Width, Height: config.Height}, nil
}
