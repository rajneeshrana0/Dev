const express = require("express");

const app = express();



// 2. http://localhost:3000/sum?a=1&b=2


let requestCount = 0;
// /sum/:a/:b 


//log method, timestamp,url


function requestIncreaser(req, res, next) {
    requestCount = requestCount + 1;
    console.log(`Method is : ` + req.method);
    console.log(`Url is : ${req.url}`);
    console.log(new Date());
    
    console.log(`Total Number of Request = ${requestCount}`);
    res.on('finish', () => {
        console.log(`Status Code of Request is : ${res.statusCode}`);
    });

    next();
}



function sumHandler(req, res) {

    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.json({
        answer: a + b
    });

}


app.get("/sum", requestIncreaser, sumHandler)

app.listen(3000);

// app.get("/multiply", requestIncreaser, function (req, res) {

//     const a = req.query.a;
//     const b = req.query.b;

//     res.json({
//         answer: a * b
//     })

// });

// app.get("/divide", requestIncreaser, function (req, res) {


//     const a = req.query.a;
//     const b = req.query.b;

//     res.json({
//         answer: a / b
//     })

// });

// app.get("/subtract", requestIncreaser, function (req, res) {

//     const a = req.query.a;
//     const b = req.query.b;

//     res.json({
//         answer: a - b
//     })

// });



