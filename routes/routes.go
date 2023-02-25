package routes

import (
	"qreel/controller"
	"qreel/middleware"
	"qreel/repository"
	"qreel/service"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func InitRoutes(db *gorm.DB) *gin.Engine {
	router := gin.Default()
	router.Use(cors.Default())
	router.Static("/images", "./src/images")

	storeRepository := repository.NewRepositoryStore(db)

	adminRepository := repository.NewRepositoryAdmin(db)
	adminService := service.NewServiceAdmin(adminRepository, storeRepository)
	adminController := controller.NewControllerAdmin(adminService)

	userRepository := repository.NewRepositoryUser(db)
	userService := service.NewServiceUser(userRepository)
	userController := controller.NewControllerUser(userService)

	itemRepository := repository.NewRepositoryItem(db)
	itemService := service.NewServiceItem(itemRepository)
	itemController := controller.NewControllerItem(itemService)

	transactionRepository := repository.NewRepositoryTransaction(db)
	transactionService := service.NewServiceTransaction(transactionRepository, itemRepository)
	transactionController := controller.NewControllerTransaction(transactionService)

	api := router.Group("/api/v1")

	authAdmin := api.Group("/auth/admin")
	authAdmin.GET("/", middleware.CheckAuthorizationAdmin(), adminController.CheckAdmin)
	authAdmin.POST("/register", adminController.Register)
	authAdmin.POST("/login", adminController.Login)

	authUser := api.Group("/auth/user")
	authUser.GET("/", middleware.CheckAuthorizationUser(), userController.CheckUser)
	authUser.POST("/register", userController.Register)
	authUser.POST("/login", userController.Login)

	item := api.Group("/item")
	item.GET("/", middleware.CheckAuthorizationAdmin(), itemController.GetAllItem)
	item.POST("/add", middleware.CheckAuthorizationAdmin(), itemController.PostItem)

	transaction := api.Group("/transaction")
	transaction.GET("/", middleware.CheckAuthorizationUser(), transactionController.GetAllTransactions)
	transaction.GET("/detail-transaction/:transactionId", middleware.CheckAuthorizationUser(), transactionController.GetAllDetailTransaction)
	transaction.POST("/add", middleware.CheckAuthorizationUser(), transactionController.PostTransaction)

	return router
}
