const mongoose = require("mongoose");

const wardenSchema = new mongoose.Schema({
  userId:       { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name:         { type: String, required: true },
  employeeId:   { type: String, unique: true },
  hostelBlocks: [String], // e.g. ["Block-A", "Block-B"]
  phone:        { type: String },
  isActive:     { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model("Warden", wardenSchema);
