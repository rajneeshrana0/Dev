

const {Router } = require("express")

const userRouter =   Router();
// const userSchema = require("../db")
const UserModel = require("../db")

userRouter.post("/signup", (req, res) => {


})

userRouter.post("/signin", (req, res) => {


})

userRouter.get("/purchase", (req, res) => {


})


module.exports = {
userRouter : userRouter
}