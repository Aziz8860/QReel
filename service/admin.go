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
