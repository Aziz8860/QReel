package models

type Admin struct {
	Id       string
	StoreId  string
	Email    string
	Password string
	Name     string
	Image    string
	Phone    int
	Role     string
}
