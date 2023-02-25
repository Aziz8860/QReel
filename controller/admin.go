package controller

import (
	"fmt"
	"net/http"
	"qreel/helper"
	"qreel/models/input"
	"qreel/service"

	"github.com/gin-gonic/gin"
)

type controllerAdmin struct {
	serviceAdmin service.ServiceAdmin
}

func NewControllerAdmin(serviceAdmin service.ServiceAdmin) *controllerAdmin {
	return &controllerAdmin{serviceAdmin: serviceAdmin}
}

func (ctr *controllerAdmin) Register(c *gin.Context) {
	var admin input.RegisterAdmin
	if err := c.ShouldBindJSON(&admin); err != nil {
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"message": "failed " + err.Error(),
		})
		return
	}

	if err := ctr.serviceAdmin.RegisterAdmin(admin); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "failed " + err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "register success",
	})
}

func (ctr *controllerAdmin) Login(c *gin.Context) {
	var admin input.Login
	if err := c.ShouldBindJSON(&admin); err != nil {
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"message": "failed " + err.Error(),
		})
		return
	}

	ok, err := ctr.serviceAdmin.LoginAdmin(admin)
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

	adminAccount, err := ctr.serviceAdmin.GetAdminByEmail(admin.Email)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": "failed " + err.Error(),
		})
		return
	}

	signedToken, err := helper.GenerateTokenAdmin(adminAccount)
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

func (ctr *controllerAdmin) CheckUser(c *gin.Context) {
	email := c.MustGet("email")
	emailString := fmt.Sprintf("%s", email)

	admin, err := ctr.serviceAdmin.GetAdminByEmail(emailString)
	if err != nil {
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"message": "failed " + err.Error(),
			})
			return
		}
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "success",
		"data":    admin,
	})
}
