package routes

import (
	"qreel/controller"
	"qreel/repository"
	"qreel/service"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func InitRoutes(db *gorm.DB) *gin.Engine {
	router := gin.Default()
	router.Use(cors.Default())

	storeRepository := repository.NewRepositoryStore(db)

	adminRepository := repository.NewRepositoryAdmin(db)
	adminService := service.NewServiceAdmin(adminRepository, storeRepository)
	adminController := controller.NewControllerAdmin(adminService)

	api := router.Group("/api/v1")
	authAdmin := api.Group("/auth/admin")
	authAdmin.POST("/register", adminController.Register)
	authAdmin.POST("/login", adminController.Login)

	return router
}
