const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  userId:       { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name:         { type: String, required: true },
  employeeId:   { type: String, unique: true },
  department:   { type: String },
  assignedClasses: [{ courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" }, className: String, section: String }],
  phone:        { type: String },
  isActive:     { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model("Teacher", teacherSchema);
