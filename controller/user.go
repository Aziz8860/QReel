package controller

import (
	"net/http"
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
