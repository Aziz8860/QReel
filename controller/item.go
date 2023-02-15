package controller

import (
	"fmt"
	"net/http"
	"qreel/models/input"
	"qreel/service"
	"strings"

	"github.com/gin-gonic/gin"
)

type controllerItem struct {
	serviceItem service.ServiceItem
}

func NewControllerItem(serviceItem service.ServiceItem) *controllerItem {
	return &controllerItem{serviceItem: serviceItem}
}

func (ctr *controllerItem) PostItem(c *gin.Context) {
	var item input.Item
	if err := c.ShouldBind(&item); err != nil {
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"message": "faield " + err.Error(),
		})
		return
	}

	adminId := c.MustGet("adminId")
	storeId := c.MustGet("storeId")
	storeIdString := fmt.Sprintf("%s", storeId)

	file, _ := c.FormFile("image")
	filename := strings.ReplaceAll(file.Filename, " ", "-")
	file.Filename = fmt.Sprintf("%s-%s", adminId, filename)
	c.SaveUploadedFile(file, "src/images/"+file.Filename)

	filepath := "/images/" + file.Filename
	item.Image = filepath

	err := ctr.serviceItem.AddItem(item, storeIdString)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": "failed" + err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "success add item",
	})
}
