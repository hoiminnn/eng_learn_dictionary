package infra

import (
	"fmt"
	"log"
	"os"

	"github.com/google/uuid"

	"database/sql"
	"encoding/csv"
	"example/hello/domain"

	_ "github.com/lib/pq"
)

type Db struct {
	conn string
}

type CsvDb struct {
}

func (db Db) getWord(id uuid.UUID) domain.Word {

	connStr := "user=eng_learn dbname=eng_db password=p@ssword host=postgresql sslmode=disable"
	fmt.Printf("%+v\n", connStr)
	dbSql, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}
	rows, err := dbSql.Query("select * from words where id = $1", id.String())
	if err != nil {
		log.Fatal(err)
	}

	var word domain.Word
	for rows.Next() {
		if err := rows.Scan(&word.Id, &word.Word); err != nil {
			log.Fatal(err)
			fmt.Printf("%+v\n", word)
		}
		fmt.Printf("%+v\n", word)
	}
	return word
}

func (db CsvDb) GetWordFromCsv() [][]string {
	file, err := os.Open("/app/infra/word.csv")
	if err != nil {
		log.Fatal(err)
	}

	// ch := make(chan []string, 10)
	r := csv.NewReader(file)
	rows, _ := r.ReadAll()
	return rows

}
