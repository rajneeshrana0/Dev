const {Router } = require("express");

const adminRouter = Router();
const {AdminModel, CourseModel} = require("../db");

const jwt = require("jsonwebtoken");

const {JWT_SECRET_Admin} = require("../config")
const {adminMiddelware} = require("../middelware/admin")


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

      }, JWT_SECRET_Admin);

      res.json({
          token
      })
  } else {
      res.json({
          message: " You are Not Autorized"
      })
  }


})


adminRouter.post("/course-create", adminMiddelware, async (req, res) => {


  const adminId = req.userId;
  const {title, desc, price,imageUrl } = req.body;

   const course= await CourseModel.create({
    title,
    desc,
    price,
    imageUrl,
    creatorId: adminId
  })

  res.status(200).json({
    message : "Course Created Successfully",
    courseId :  course._id
  })

});

adminRouter.put("/course-update",adminMiddelware, async (req, res) => {


  const adminId = req.userId;
  const {title, desc, price,imageUrl,courseId } = req.body;

   const course= await CourseModel.updateOne({
    _id: courseId,
    adminId
   },{
    title,
    desc,
    price,
    imageUrl,
 
  })

  res.status(200).json({
    message : "Course Created Successfully",
    courseId :  course._id
  })


})

adminRouter.get("/course/bulk", adminMiddelware, async (req, res) => {
  const adminId = req.userId;

  const course = await CourseModel.find({
   adminId
  })

  res.json({
    message : "All Course fetched "
  })

})


module.exports ={

    adminRouter : adminRouter
}