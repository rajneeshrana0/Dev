const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

// Connect to MongoDB
mongoose.connect("mongodb+srv://ranarajneesh075:DjBa7wS52OKrWQMu@cluster0.xlpmf.mongodb.net/course-Selling-Backend");

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
const UserModel = mongoose.model("users", userSchema); // Model name: 'users'
const AdminModel = mongoose.model("admin", adminSchema); // Model name: 'admin'
const CourseModel = mongoose.model("courses", courseSchema); // Fixed model name: 'courses'
const PurchaseModel = mongoose.model("purchases", purchaseSchema); // Fixed model name: 'purchases'

// Export Models
module.exports = {
  UserModel,
  AdminModel,
  CourseModel,
  PurchaseModel,
};
