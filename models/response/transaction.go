package response

import "time"

type Transaction struct {
	Id         string    `json:"id"`
	UserId     string    `json:"userId"`
	AdminId    string    `json:"adminId"`
	StoreId    string    `json:"storeId"`
	Name       string    `json:"storeName"`
	Date       time.Time `json:"date"`
	Payment    string    `json:"payment"`
	TotalPrice float64   `json:"totalPrice"`
}

type DetailTransaction struct {
	Id            string  `json:"id"`
	TransactionId string  `json:"transactionId"`
	ItemId        string  `json:"itemId"`
	Name          string  `json:"itemName"`
	Quantity      int     `json:"quantity"`
	Price         float64 `json:"price"`
}