package main

import (
	"fmt"
	"io"
	"net/http"
	"testing"
)

type Word struct {
	Id int
}

func TestMainExecute(t *testing.T) {
	go main()
	res, err := http.Get("http://localhost:8080/ping")

	if err != nil {
		t.Fatalf("Cannot make get: %v\n", err)
	}

	bodySb, err := io.ReadAll(res.Body)

	if err != nil {
		t.Fatalf("Cannot make get: %v\n", err)
	}

	body := string(bodySb)
	fmt.Printf("Body: %v\n", body)
}
