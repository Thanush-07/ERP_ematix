const mongoose = require("mongoose");

const outpassSchema = new mongoose.Schema({
  studentId:   { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  appliedBy:   { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  exitDate:    { type: Date, required: true },
  returnDate:  { type: Date, required: true },
  reason:      { type: String, required: true },
  destination: { type: String },
  status:      { type: String, enum: ["pending","approved","denied","returned"], default: "pending" },
  approvedBy:  { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  returnedAt:  { type: Date },
}, { timestamps: true });

module.exports = mongoose.model("Outpass", outpassSchema);
