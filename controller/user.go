package controller

import (
	"net/http"
	"qreel/helper"
	"qreel/models/input"
	"qreel/service"

	"github.com/gin-gonic/gin"
)

type controllerUser struct {
	serviceUser service.ServiceUser
}

func NewControllerUser(serviceUser service.ServiceUser) *controllerUser {
	return &controllerUser{serviceUser: serviceUser}
}

func (ctr *controllerUser) Register(c *gin.Context) {
	var user input.RegisterUser
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"message": "failed " + err.Error(),
		})
		return
	}

	if err := ctr.serviceUser.RegisterUser(user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "failed " + err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "register success",
	})
}

func (ctr *controllerUser) Login(c *gin.Context) {
	var user input.Login
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"message": "failed " + err.Error(),
		})
		return
	}

	ok, err := ctr.serviceUser.LoginUser(user)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "failed " + err.Error(),
		})
		return
	}
	if !ok {
		c.JSON(http.StatusUnauthorized, gin.H{
			"message": "failed wrong email or password",
		})
		return
	}

	userAccount, err := ctr.serviceUser.GetUserByEmail(user.Email)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": "failed " + err.Error(),
		})
		return
	}

	signedToken, err := helper.GenerateTokenUser(userAccount)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": "failed " + err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "success",
		"token":   signedToken,
	})
}
