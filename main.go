package main

import (
	"fmt"
	"log"
	"os"

	"qreel/config"
	"qreel/routes"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("error loading .env file")
	}

	port := os.Getenv("PORT")
	dbHost := os.Getenv("DB_HOST")
	dbUser := os.Getenv("DB_USER")
	dbPass := os.Getenv("DB_PASS")
	dbName := os.Getenv("DB_NAME")

	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=1921 sslmode=disable TimeZone=Asia/Shanghai", dbHost, dbUser, dbPass, dbName)
	config.InitDB(dsn)
	config.MirgrateDB()
	defer config.CloseDB()

	routes := routes.InitRoutes(config.DB)

	routes.Run(":" + port)
}
