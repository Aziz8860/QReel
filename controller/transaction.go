package controller

import (
	"fmt"
	"net/http"
	"qreel/models/input"
	"qreel/service"

	"github.com/gin-gonic/gin"
)

type controllerTransaction struct {
	serviceTransaction service.ServiceTransaction
}

func NewControllerTransaction(serviceTransaction service.ServiceTransaction) *controllerTransaction {
	return &controllerTransaction{serviceTransaction: serviceTransaction}
}

func (ctr *controllerTransaction) PostTransaction(c *gin.Context) {
	var transaction input.Transaction
	if err := c.ShouldBindJSON(&transaction); err != nil {
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"message": "faield " + err.Error(),
		})
		return
	}

	userId := c.MustGet("userId")
	userIdString := fmt.Sprintf("%s", userId)

	err := ctr.serviceTransaction.AddTransaction(transaction, userIdString)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": "failed" + err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "success add transaction",
	})
}

func (ctr *controllerTransaction) GetAllTransactions(c *gin.Context) {
	userId := c.MustGet("userId")
	userIdString := fmt.Sprintf("%s", userId)

	transactions, err := ctr.serviceTransaction.GetAllTransactions(userIdString)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": "failed" + err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "success",
		"data":    transactions,
	})
}

func (ctr *controllerTransaction) GetAllDetailTransaction(c *gin.Context) {
	transactionId := c.Param("transactionId")
	detailTransactions, err := ctr.serviceTransaction.GetDetailTransactionByTransactionId(transactionId)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": "failed" + err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "success",
		"data":    detailTransactions,
	})
}
