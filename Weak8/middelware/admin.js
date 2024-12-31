const jwt = require("jsonwebtoken");
const {JWT_SECRET_Admin} = require("../config");



function adminMiddelware (req,res,next) {

    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_SECRET_Admin);

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

    adminMiddelware
}