package input

type Item struct {
	Name  string `form:"name"`
	Image string
	Price float64 `form:"price"`
	SKU   int     `form:"sku"`
}
