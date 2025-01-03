const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

// Connect to MongoDB


// Define Schemas
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const adminSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const courseSchema = new Schema({
  title: String,
  desc: String,
  price: Number,
  imageUrl: String,
  creatorId: ObjectId,
});

const purchaseSchema = new Schema({
  userId: ObjectId,
  courseId: ObjectId,
});

// Define Models
const UserModel = mongoose.model("users", userSchema); 
const AdminModel = mongoose.model("admin", adminSchema); 
const CourseModel = mongoose.model("courses", courseSchema); 
const PurchaseModel = mongoose.model("purchases", purchaseSchema); 

// Export Models
module.exports = {
  UserModel,
  AdminModel,
  CourseModel,
  PurchaseModel,
};
