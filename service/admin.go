package service

import (
	"qreel/helper"
	"qreel/models"
	"qreel/models/input"
	"qreel/repository"

	"github.com/google/uuid"
)

type serviceAdmin struct {
	repositoryAdmin repository.RepositoryAdmin
	repositoryStore repository.RepositoryStore
}

type ServiceAdmin interface {
	RegisterAdmin(registerAdmin input.RegisterAdmin) error
	LoginAdmin(login input.Login) (bool, error)
	GetAdminByEmail(email string) (models.Admin, error)
}

func NewServiceAdmin(repositoryAdmin repository.RepositoryAdmin, repositoryStore repository.RepositoryStore) *serviceAdmin {
	return &serviceAdmin{repositoryAdmin: repositoryAdmin, repositoryStore: repositoryStore}
}

func (s *serviceAdmin) RegisterAdmin(registerAdmin input.RegisterAdmin) error {
	idStore := uuid.New().String()
	idAdmin := uuid.New().String()

	store := models.Store{
		Id:      string(idStore),
		Name:    registerAdmin.Store,
		Address: registerAdmin.Address,
	}
	err := s.repositoryStore.CreateStore(store)
	if err != nil {
		return err
	}

	passwordHashed, err := helper.PasswordHash(registerAdmin.Password)
	if err != nil {
		return err
	}

	admin := models.Admin{
		Id:       idAdmin,
		StoreId:  idStore,
		Email:    registerAdmin.Email,
		Password: passwordHashed,
		Name:     registerAdmin.Name,
		Phone:    registerAdmin.Phone,
		Role:     "owner",
	}
	err = s.repositoryAdmin.CreateAdmin(admin)
	if err != nil {
		return err
	}

	return nil
}

func (s *serviceAdmin) LoginAdmin(login input.Login) (bool, error) {
	admin, err := s.repositoryAdmin.GetAdminByEmail(login.Email)
	if err != nil {
		return false, err
	}
	if admin.Email == "" {
		return false, nil
	}

	ok := helper.CheckPasswordHash(login.Password, admin.Password)

	return ok, nil
}

func (s *serviceAdmin) GetAdminByEmail(email string) (models.Admin, error) {
	admin, err := s.repositoryAdmin.GetAdminByEmail(email)
	return admin, err
}
