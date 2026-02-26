const mongoose = require("mongoose");
const { ROLES } = require("../../config/constants");

const circularSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  content:     { type: String, required: true },
  attachmentUrl: { type: String },
  targetRoles: [{ type: String, enum: Object.values(ROLES) }],
  courseIds:   [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  publishedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  publishedAt: { type: Date, default: Date.now },
  expiresAt:   { type: Date },
}, { timestamps: true });

module.exports = mongoose.model("Circular", circularSchema);
