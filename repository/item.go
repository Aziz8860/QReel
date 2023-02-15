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
	GetAllItemByStoreId(storeId string) ([]models.Item, error)
}

func NewRepositoryItem(DB *gorm.DB) *repositoryItem {
	return &repositoryItem{DB: DB}
}

func (r *repositoryItem) CreateItem(item models.Item) error {
	query := `INSERT INTO item (id, store_id, name, image, price) VALUES (?, ?, ?, ?, ?)`
	err := r.DB.Exec(query, item.Id, item.StoreId, item.Name, item.Image, item.Price).Error
	return err
}

func (r *repositoryItem) GetAllItemByStoreId(storeId string) ([]models.Item, error) {
	var items []models.Item
	query := `SELECT * FROM item WHERE store_id = ?`
	err := r.DB.Raw(query, storeId).Scan(&items).Error
	return items, err
}
