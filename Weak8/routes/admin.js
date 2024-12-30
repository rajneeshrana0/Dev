const {Router } = require("express");

const adminRouter = Router();
const {AdminModel} = require("../db");

const jwt = require("jsonwebtoken");

const JWT_SECRET= "Ram"


adminRouter.post("/signup", async (req, res) => {


  const abc = { email, password, firstName, lastName } = req.body

  // console.log(abc)

  await AdminModel.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
  });
  res.json({
      message: "Admin Registered Succesfully"
  })

})

adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body


  // Find user in db

  const adminUser = await AdminModel.findOne({
      email,
      password
  })

  if (adminUser) {
      const token = jwt.sign({

          id: adminUser._id,

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


adminRouter.post("/course-create", (req, res) => {


})

adminRouter.put("/course-update", (req, res) => {


})

adminRouter.get("/course/bulk", (req, res) => {


})


module.exports ={

    adminRouter : adminRouter
}