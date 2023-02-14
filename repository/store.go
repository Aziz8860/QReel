package repository

import (
	"qreel/models"

	"gorm.io/gorm"
)

type repositoryStore struct {
	DB *gorm.DB
}

type RepositoryStore interface {
	CreateStore(store models.Store) error
}

func NewRepositoryStore(DB *gorm.DB) *repositoryStore {
	return &repositoryStore{DB: DB}
}

func (r *repositoryStore) CreateStore(store models.Store) error {
	query := `INSERT INTO store (id, name, address) VALUES (?, ?, ?)`
	err := r.DB.Exec(query, store.Id, store.Name, store.Address).Error
	return err
}
