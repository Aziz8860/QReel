package repository

import (
	"qreel/models"

	"gorm.io/gorm"
)

type repositoryItem struct {
	DB *gorm.DB
}

type RepositoryItem interface {
	CreateItem(item models.Item) error
}

func NewRepositoryItem(DB *gorm.DB) *repositoryItem {
	return &repositoryItem{DB: DB}
}

func (r *repositoryItem) CreateItem(item models.Item) error {
	query := `INSERT INTO item (id, store_id, name, image, price) VALUES (?, ?, ?, ?, ?)`
	err := r.DB.Exec(query, item.Id, item.StoreId, item.Name, item.Image, item.Price).Error
	return err
}
