const mongoose = require("mongoose");

const feeHeadSchema = new mongoose.Schema({
  name:        { type: String, required: true, unique: true }, // Tuition, Transport, Hostel, Exam
  description: { type: String },
  isActive:    { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model("FeeHead", feeHeadSchema);
