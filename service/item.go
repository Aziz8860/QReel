package service

import (
	"qreel/models"
	"qreel/models/input"
	"qreel/repository"

	"github.com/google/uuid"
)

type serviceItem struct {
	repositoryItem repository.RepositoryItem
}

type ServiceItem interface {
	AddItem(item input.Item, storeId string) error
	GetAllItemByStoreId(storeId string) ([]models.Item, error)
}

func NewServiceItem(repositoryItem repository.RepositoryItem) *serviceItem {
	return &serviceItem{repositoryItem: repositoryItem}
}

func (s *serviceItem) AddItem(item input.Item, storeId string) error {
	idItem := uuid.New().String()

	newItem := models.Item{
		Id:      idItem,
		StoreId: storeId,
		Name:    item.Name,
		Image:   item.Image,
		Price:   item.Price,
	}

	err := s.repositoryItem.CreateItem(newItem)
	if err != nil {
		return err
	}

	return nil
}

func (s *serviceItem) GetAllItemByStoreId(storeId string) ([]models.Item, error) {
	items, err := s.repositoryItem.GetAllItemByStoreId(storeId)
	return items, err
}
