package controller

import (
	"net/http"
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
