package domain

import "github.com/google/uuid"

type Word struct {
	Id      uuid.UUID
	Word    string
	Meaning string
}
