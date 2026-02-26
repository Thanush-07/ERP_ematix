const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  userId:        { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  regNumber:     { type: String, unique: true, required: true },
  name:          { type: String, required: true },
  dob:           { type: Date },
  gender:        { type: String, enum: ["male", "female", "other"] },
  photo:         { type: String },
  phone:         { type: String },
  email:         { type: String },
  address:       { type: String },
  admissionDate: { type: Date, default: Date.now },
  courseId:      { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  className:     { type: String },
  section:       { type: String },
  year:          { type: Number },
  parent: {
    name:         { type: String },
    phone:        { type: String },
    email:        { type: String },
    relation:     { type: String },
    userId:       { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  isActive:      { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);
