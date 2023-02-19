package middleware

import (
	"errors"
	"net/http"
	"qreel/config"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
)

func CheckAuthorizationAdmin() gin.HandlerFunc {
	return func(c *gin.Context) {
		auth := c.GetHeader("Authorization")
		if auth == "" {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"message": "failed login first!",
			})
			return
		}

		if !strings.Contains(auth, "Bearer") {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"message": "invalid authorization",
			})
			return
		}

		var tokenString string
		arrayAuth := strings.Split(auth, " ")
		if len(arrayAuth) == 2 {
			tokenString = arrayAuth[1]
		}

		token, err := jwt.Parse(tokenString, func(t *jwt.Token) (interface{}, error) {
			_, ok := t.Method.(*jwt.SigningMethodHMAC)
			if !ok {
				return nil, errors.New("invalid token")
			}

			return []byte(config.JwtKey), nil
		})
		if err != nil {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"message": "invalid authorization",
			})
			return
		}

		claim, ok := token.Claims.(jwt.MapClaims)
		if !ok || !token.Valid {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"message": "invalid authorization",
			})
			return
		}

		adminId := claim["Id"].(string)
		storeId := claim["StoreId"].(string)
		Role := claim["Role"].(string)

		c.Set("adminId", adminId)
		c.Set("storeId", storeId)
		c.Set("role", Role)

		c.Next()
	}
}

func CheckAuthorizationUser() gin.HandlerFunc {
	return func(c *gin.Context) {
		auth := c.GetHeader("Authorization")
		if auth == "" {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"message": "failed login first!",
			})
			return
		}

		if !strings.Contains(auth, "Bearer") {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"message": "invalid authorization",
			})
			return
		}

		var tokenString string
		arrayAuth := strings.Split(auth, " ")
		if len(arrayAuth) == 2 {
			tokenString = arrayAuth[1]
		}

		token, err := jwt.Parse(tokenString, func(t *jwt.Token) (interface{}, error) {
			_, ok := t.Method.(*jwt.SigningMethodHMAC)
			if !ok {
				return nil, errors.New("invalid token")
			}

			return []byte(config.JwtKey), nil
		})
		if err != nil {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"message": "invalid authorization",
			})
			return
		}

		claim, ok := token.Claims.(jwt.MapClaims)
		if !ok || !token.Valid {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"message": "invalid authorization",
			})
			return
		}

		userId := claim["Id"].(string)

		c.Set("userId", userId)

		c.Next()
	}
}
