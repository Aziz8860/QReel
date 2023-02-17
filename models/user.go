package models

type User struct {
	Id           string
	Email        string
	Password     string
	Name         string
	Image        string
	Phone        int
	Budget       float64
	ReferralCode string
	Point        int
	Code         string
}
