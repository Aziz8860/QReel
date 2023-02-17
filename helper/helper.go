package helper

import (
	"math/rand"
	"qreel/config"
	"qreel/models"
	"time"

	"github.com/golang-jwt/jwt/v4"
	"golang.org/x/crypto/bcrypt"
)

func PasswordHash(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

func CheckPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}

func GenerateTokenAdmin(admin models.Admin) (string, error) {
	claims := config.CustomClaimsAdmin{
		Id:      admin.Id,
		StoreId: admin.StoreId,
		Email:   admin.Email,
		Name:    admin.Name,
		Image:   admin.Image,
		Phone:   admin.Phone,
		Role:    admin.Role,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(time.Hour * 168)),
			Issuer:    "qreel",
		},
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	signedToken, err := token.SignedString([]byte(config.JwtKey))
	return signedToken, err
}

func GenerateCode() string {
	rand.Seed(time.Now().UnixNano())

	const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

	var result string
	for i := 0; i < 20; i++ {
		result += string(charset[rand.Intn(len(charset))])
	}

	return result
}
