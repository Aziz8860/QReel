package repository

import (
	"qreel/models"
	"qreel/models/response"

	"gorm.io/gorm"
)

type repositoryTransaction struct {
	DB *gorm.DB
}

type RepositoryTransaction interface {
	CreateTransaction(transaction models.Transaction) error
	CreateDetailTransaction(detailTransaction models.DetailTransaction) error
	GetAllTransactionByUserId(userId string) ([]response.Transaction, error)
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

func (r *repositoryTransaction) GetAllTransactionByUserId(userId string) ([]response.Transaction, error) {
	var transactions []response.Transaction
	query := `SELECT t.id, t.user_id, t.admin_id, t.store_id, s.name, t."date", t.payment, t.total_price 
	FROM "transaction" t
	LEFT JOIN store s ON t.store_id = s.id
	WHERE user_id = ?`
	err := r.DB.Raw(query, userId).Scan(&transactions).Error
	return transactions, err
}
