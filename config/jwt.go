package config

import (
	"os"

	"github.com/golang-jwt/jwt/v4"
)

var JwtKey = os.Getenv("JWT_KEY")

type CustomClaimsAdmin struct {
	Id      string
	StoreId string
	Email   string
	Name    string
	Image   string
	Phone   int
	Role    string
	jwt.RegisteredClaims
}
