const jwt = require("jsonwebtoken");

const {JWT_SECRET} = require("../config");


function userMiddelware (req,res,next) {

    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_SECRET);

    if(decoded) {
        req.userId = decoded.id;
        next();

    } else {
        res.json({
            message : "Your are not Signed in"
        })
    }



}

module.exports ={

    userMiddelware
}