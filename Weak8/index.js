const express = require("express");

const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/courses");
const { adminRouter } = require("./routes/admin");

const app = express();
app.use(express.json())

app.use("/users" , userRouter);
app.use("/", courseRouter);

app.use("/admin", adminRouter);




async function main ( ) {

   await mongoose.connect("mongodb+srv://ranarajneesh075:DjBa7wS52OKrWQMu@cluster0.xlpmf.mongodb.net/course-Selling-Backend");


    app.listen(3000);

    console.log("Port statrted at 3000");
}

main();