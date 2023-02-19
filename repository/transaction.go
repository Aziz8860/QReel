package repository

import (
	"qreel/models"

	"gorm.io/gorm"
)

type repositoryTransaction struct {
	DB *gorm.DB
}

type RepositoryTransaction interface {
	CreateTransaction(transaction models.Transaction) error
	CreateDetailTransaction(detailTransaction models.DetailTransaction) error
}

func NewRepositoryTransaction(DB *gorm.DB) *repositoryTransaction {
	return &repositoryTransaction{DB: DB}
}

func (r *repositoryTransaction) CreateTransaction(transaction models.Transaction) error {
	query := `INSERT INTO transaction (id, admin_id, store_id, date, payment, total_price, user_id)
	VALUES (?, ?, ?, ?, ?, ?, ?)`
	err := r.DB.Exec(query, transaction.Id, transaction.AdminId, transaction.StoreId, transaction.Date, transaction.Payment, transaction.TotalPrice, transaction.UserId).Error
	return err
}

func (r *repositoryTransaction) CreateDetailTransaction(detailTransaction models.DetailTransaction) error {
	query := `INSERT INTO detail_transaction (id, transaction_id, item_id, quantity, price)
	VALUES (?, ?, ?, ?, ?)`
	err := r.DB.Exec(query, detailTransaction.Id, detailTransaction.TransactionId, detailTransaction.ItemId, detailTransaction.Quantity, detailTransaction.Price).Error
	return err
}
