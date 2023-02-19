package models

import "time"

type Transaction struct {
	Id         string
	UserId     string
	AdminId    string
	StoreId    string
	Date       time.Time
	Payment    string
	TotalPrice float64
}

type DetailTransaction struct {
	Id            string
	TransactionId string
	ItemId        string
	Quantity      int
	Price         float64
}
