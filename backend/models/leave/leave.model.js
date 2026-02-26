const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
  studentId:   { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  appliedBy:   { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // parent userId
  fromDate:    { type: Date, required: true },
  toDate:      { type: Date, required: true },
  reason:      { type: String, required: true },
  type:        { type: String, enum: ["medical","personal","on-duty","other"], default: "personal" },
  attachmentUrl: { type: String },
  status:      { type: String, enum: ["pending","approved","denied"], default: "pending" },
  approvedBy:  { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  remarks:     { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Leave", leaveSchema);
