package main

import (
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	"example/hello/infra"

	_ "github.com/lib/pq"
)

func main() {
	r := gin.Default()

	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:8080"}
	r.Use(cors.New(config))

	r.GET("/ping", func(ctx *gin.Context) {

		csvDb := infra.CsvDb{}

		words := csvDb.GetWordFromCsv()
		ctx.JSON(http.StatusOK, gin.H{
			"response": words,
		})
	})

	r.GET("/search", func(ctx *gin.Context) {
		queryWord := ctx.Query("word")

		csvDb := infra.CsvDb{}

		words := csvDb.GetWordFromCsv()

		result := seachWord(words, queryWord)
		ctx.JSON(http.StatusOK, gin.H{
			"response": words[result],
		})
	})

	r.Run("0.0.0.0:8080")
}

func seachWord(words [][]string, queryWord string) int {
	var match int
	for i, v := range words {
		if v[2] == queryWord {
			match = i
		}
	}
	return match
}
