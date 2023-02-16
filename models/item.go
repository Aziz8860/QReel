package models

type Item struct {
	Id      string  `json:"id"`
	StoreId string  `json:"storeId"`
	Name    string  `json:"name"`
	Image   string  `json:"image"`
	Price   float64 `json:"price"`
}
