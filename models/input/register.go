package input

type RegisterAdmin struct {
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required"`
	Name     string `json:"name" binding:"required"`
	Phone    int    `json:"phone" binding:"required"`
	Store    string `json:"store" binding:"required"`
	Address  string `json:"address" binding:"required"`
}
