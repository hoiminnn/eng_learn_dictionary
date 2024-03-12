package infra

import (
	"fmt"
	"testing"

	"github.com/stretchr/testify/assert"

	"github.com/google/uuid"
)

func TestMain(t *testing.T) {
	db := Db{"user=postgres dbname=postgres password=p@ssword host=postgresql sslmode=disable"}

	byte := []byte("21c19ad7-79e9-4544-9a28-3b899d44e433")
	id := uuid.UUID(byte)
	fmt.Printf("%+v\n", id)
	word := db.getWord(id)

	assert.Equal(t, "test", word.Word)
}

// assert only type.
// not assert data value
func TestGetWordFromCsv(t *testing.T) {
	db := CsvDb{}
	fmt.Println("read success")
	db.GetWordFromCsv()
}
