package repository

import (
	"qreel/models"

	"gorm.io/gorm"
)

type repositoryAdmin struct {
	DB *gorm.DB
}

type RepositoryAdmin interface {
	CreateAdmin(admin models.Admin) error
}

func NewRepositoryAdmin(DB *gorm.DB) *repositoryAdmin {
	return &repositoryAdmin{DB: DB}
}

func (r *repositoryAdmin) CreateAdmin(admin models.Admin) error {
	query := `INSERT INTO admin (id, store_id, email, password, name, phone, role) VALUES (?, ?, ?, ?, ?, ?, ?)`
	err := r.DB.Exec(query, admin.Id, admin.StoreId, admin.Email, admin.Password, admin.Name, admin.Phone, admin.Role).Error
	return err
}
