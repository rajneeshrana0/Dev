const express = require("express");
const cors = require("cors");

const app = express();



app.use(cors());
app.use(express.json());


app.post("/sum",function(req,res){
const a = parseInt(req.body.a);
const b = parseInt(req.body.b);


res.json({
    answer: a + b
})

// console.log(answer);

})

// app.get("/sum"),function (req,res){

//     res.json({
//         answer
//     })
// }

app.listen(3000);