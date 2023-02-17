package service

import (
	"qreel/helper"
	"qreel/models"
	"qreel/models/input"
	"qreel/repository"

	"github.com/google/uuid"
)

type serviceUser struct {
	repositoryUser repository.RepositoryUser
}

type ServiceUser interface {
	RegisterUser(registerUser input.RegisterUser) error
}

func NewServiceUser(repositoryUser repository.RepositoryUser) *serviceUser {
	return &serviceUser{repositoryUser: repositoryUser}
}

func (s *serviceUser) RegisterUser(registerUser input.RegisterUser) error {
	idUser := uuid.New().String()

	passwordHashed, err := helper.PasswordHash(registerUser.Password)
	if err != nil {
		return err
	}

	code := helper.GenerateCode()

	if registerUser.ReferralCode != "" {
		getUser, err := s.repositoryUser.FindUserByCode(registerUser.ReferralCode)
		if err != nil {
			return err
		}

		err = s.repositoryUser.UpdatePointUser(getUser.Id, 10)
		if err != nil {
			return err
		}
	}

	user := models.User{
		Id:           idUser,
		Email:        registerUser.Email,
		Password:     passwordHashed,
		Name:         registerUser.Name,
		Phone:        registerUser.Phone,
		Budget:       0,
		ReferralCode: registerUser.ReferralCode,
		Point:        0,
		Code:         code,
	}

	err = s.repositoryUser.CreateUser(user)
	if err != nil {
		return err
	}

	return nil
}
