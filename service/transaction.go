package service

import (
	"qreel/models"
	"qreel/models/input"
	"qreel/models/response"
	"qreel/repository"
	"time"

	"github.com/google/uuid"
)

type serviceTransaction struct {
	repositoryTransaction repository.RepositoryTransaction
	repositoryItem        repository.RepositoryItem
}

type ServiceTransaction interface {
	AddTransaction(transaction input.Transaction, userId string) error
	GetAllTransactions(userId string) ([]response.Transaction, error)
}

func NewServiceTransaction(repositoryTrasaction repository.RepositoryTransaction, repositoryItem repository.RepositoryItem) *serviceTransaction {
	return &serviceTransaction{repositoryTransaction: repositoryTrasaction, repositoryItem: repositoryItem}
}

func (s *serviceTransaction) AddTransaction(transaction input.Transaction, userId string) error {
	newTransaction := models.Transaction{
		Id:         transaction.Id,
		UserId:     userId,
		AdminId:    transaction.AdminId,
		StoreId:    transaction.StoreId,
		Date:       time.Now(),
		Payment:    transaction.Payment,
		TotalPrice: transaction.TotalPrice,
	}

	err := s.repositoryTransaction.CreateTransaction(newTransaction)
	if err != nil {
		return err
	}

	for _, item := range transaction.Items {
		getItem, err := s.repositoryItem.GetItemByNameAndStoreId(item.Name, transaction.StoreId)
		if err != nil {
			return err
		}

		newDetailTransaction := models.DetailTransaction{
			Id:            uuid.New().String(),
			TransactionId: transaction.Id,
			ItemId:        getItem.Id,
			Quantity:      item.Quantity,
			Price:         item.Price,
		}
		err = s.repositoryTransaction.CreateDetailTransaction(newDetailTransaction)
		if err != nil {
			return err
		}
	}

	return nil
}

func (s *serviceTransaction) GetAllTransactions(userId string) ([]response.Transaction, error) {
	transactions, err := s.repositoryTransaction.GetAllTransactionByUserId(userId)
	return transactions, err
}
