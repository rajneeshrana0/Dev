const express = require('express');
const jwt = require('jsonwebtoken')

const app = express();


const JWT_SECRET = "Rajneesh"

app.use(express.json());


function auth(req, res, next) {

    const token = req.headers.body



    const decodeData = jwt.verify(token, JWT_SECRET)

    req.user = decodeData;
    next();




}

const users = []



app.post("/signup", (req, res) => {

    const username = req.body.username
    const password = req.body.password

    users.push({
        username: username,
        password: password
    });

    res.json({
        message: "User Registered Succesfully"
    })


})

app.post("/signin", (req, res) => {

    const username = req.body.username
    const password = req.body.password

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {

        if (users[i].username === username && users[i].password === password) {
            foundUser = users[i];
        }
    }

    if (!foundUser) {
        res.json({
            message: "Wrong Creaditonal "
        })
    } else {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);

        res.json({
            token: token
        })
    }


})
app.use(auth);
app.get("/me", (req, res) => {

    const token = req.headers.token

    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData.username) {
        let foundUser = null;
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === decodedData.username) {
                foundUser = users[i]
            }
        }

        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }


})



app.listen(3000);