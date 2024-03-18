
const { signup, signInUser } = require("../controllers/user");

const UsersRouter = require("express").Router();

//1. Create user-Create account
UsersRouter.post("/create", signup); 
//2. login user
UsersRouter.post("/login", signInUser);




module.exports = UsersRouter;