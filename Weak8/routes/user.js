const { Router } = require("express")
const userRouter = Router();
const { UserModel } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

// console.log(UserModel);
userRouter.post("/signup", async (req, res) => {

    const abc = { email, password, firstName, lastName } = req.body

    console.log(abc)

    await UserModel.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    });
    res.json({
        message: "User Registered Succesfully"
    })

})

userRouter.post("/signin", async (req, res) => {

    const { email, password } = req.body


    // Find user in db

    const user = await UserModel.findOne({
        email,
        password
    })

    if (user) {
        const token = jwt.sign({

            id: user._id,

        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.json({
            message: " You are Not Autorized"
        })
    }


})

userRouter.get("/purchase", (req, res) => {


})


module.exports = {
    userRouter: userRouter
}