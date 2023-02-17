package repository

import (
	"qreel/models"

	"gorm.io/gorm"
)

type repositoryUser struct {
	DB *gorm.DB
}

type RepositoryUser interface {
	CreateUser(user models.User) error
	FindUserByCode(code string) (models.User, error)
	UpdatePointUser(userId string, point int) error
	GetUserByEmail(email string) (models.User, error)
}

func NewRepositoryUser(DB *gorm.DB) *repositoryUser {
	return &repositoryUser{DB: DB}
}

func (r *repositoryUser) CreateUser(user models.User) error {
	query := `INSERT INTO "user" (id, email, password, name, phone, budget, referral_code, point, code)
	VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
	err := r.DB.Exec(query, user.Id, user.Email, user.Password, user.Name, user.Phone, user.Budget, user.ReferralCode, user.Point, user.Code).Error
	return err
}

func (r *repositoryUser) FindUserByCode(code string) (models.User, error) {
	var user models.User
	query := `SELECT * FROM user WHERE code = ?`
	err := r.DB.Raw(query, code).Scan(&user).Error
	return user, err
}

func (r *repositoryUser) UpdatePointUser(userId string, point int) error {
	query := `UPDATE user SET point = ? WHERE id = ?`
	err := r.DB.Exec(query, point, userId).Error
	return err
}

func (r *repositoryUser) GetUserByEmail(email string) (models.User, error) {
	var user models.User
	query := `SELECT * FROM "user" WHERE email = ?`
	err := r.DB.Raw(query, email).Scan(&user).Error
	return user, err
}
