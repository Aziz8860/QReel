package input

type Transaction struct {
	Id         string                 `json:"id" binding:"required"`
	AdminId    string                 `json:"adminId" binding:"required"`
	StoreId    string                 `json:"storeId" binding:"required"`
	Items      []ItemInputTransaction `json:"items" binding:"required"`
	Payment    string                 `json:"payment" binding:"required"`
	TotalPrice float64                `json:"totalPrice" binding:"required"`
}

type ItemInputTransaction struct {
	Name     string  `json:"name" binding:"required"`
	Quantity int     `json:"quantity" binding:"required"`
	Price    float64 `json:"price" binding:"required"`
}
