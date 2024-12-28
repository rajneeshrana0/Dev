const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { UserModel, TodoModel } = require('./db')
const bcrypt = require("bcrypt");
const {z} = require("zod");

const JWT_SECRET = "Rajneesh_Rana";

mongoose.connect("mongodb+srv://ranarajneesh075:DjBa7wS52OKrWQMu@cluster0.xlpmf.mongodb.net/todo-rajneesh")

const app = express();

app.use(express.json())


app.post("/signup", async function (req, res) {
    // input validation

    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        // password:z.string().min(3).max(100),
        password: z.string().min(6).refine((password) => /[A-Z]/.test(password), {message: "Required atleast one uppercase character"}).refine((password) => /[a-z]/.test(password), {message: "Required atleast one lowercase character"}).refine((password) => /[0-9]/.test(password), {message: "Required atleast one number"}).refine((password) => /[!@#$%^&*]/.test(password), {message: "Required atleast one special character"}),
        name:z.string().min(3).max(100)
    })

    // Parsing Data

    const parsedData = requiredBody.parse(req.body);
    const paredDataWithSuccess = requiredBody.body.safeParse(req.body);

    if(!paredDataWithSuccess.success) {
        res.json({
            message : " Incorrect Format",
            error: paredDataWithSuccess.error // 1. How to show user Exact Error
        })
    }

    
    // 

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const hashedPassword = await bcrypt.hash(password,10);
    console.log(hashedPassword);

    await UserModel.create({
        name: name,
        password: hashedPassword,
        email: email
    });

    res.json({
        message: "User Registered Succesfully"
    });


});



app.post("/signin", async function (req, res) {

    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
        
    });
    if(!response){
        res.json({
            message : " User Not Found"
        })
    }
    const passwordMatched=bcrypt.compare(password,response.password)

    if (passwordMatched) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);
        res.json({

            token: token

        })
    } else {

        res.status(403).json({
            message: "Incorect Creadientails"
        })
    }


});



app.post("/todo", auth, function (req, res) {


    const userId = req.userId;

    const title = req.body.title;
    TodoModel.create({
        title,
        userId
    })

    res.json({
        userIs: userId
    })


});



app.get("/todos", auth, async function (req, res) {

    const userId = req.userId;

    const todos = await TodoModel.find({
        userId: userId
    })

    res.json({
        todos
    })

});


function auth(req, res, next) {

    const token = req.headers.token;

    const decode = jwt.verify(token, JWT_SECRET);

    if (decode) {
        req.userId = decode.id;
        next();
    } else {
        res.json({
            message: "You are Not logged In"
        })
    }
}


app.listen(3000);
