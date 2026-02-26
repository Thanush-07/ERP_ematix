const mongoose = require("mongoose");

const checkinSchema = new mongoose.Schema({
  studentId:   { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  type:        { type: String, enum: ["check_in","check_out"], required: true },
  location:    { type: String, default: "Hostel Gate" },
  recordedBy:  { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  notes:       { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Checkin", checkinSchema);
