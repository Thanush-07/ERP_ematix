const mongoose = require("mongoose");
const bcrypt   = require("bcryptjs");
const { ROLES } = require("../../config/constants");

const userSchema = new mongoose.Schema({
  name:         { type: String, required: true, trim: true },
  email:        { type: String, unique: true, sparse: true, lowercase: true },
  phone:        { type: String, required: true, unique: true },
  passwordHash: { type: String },
  role:         { type: String, enum: Object.values(ROLES), required: true },
  isActive:     { type: Boolean, default: true },
  profilePhoto: { type: String },
  lastLogin:    { type: Date },
}, { timestamps: true });

userSchema.pre("save", async function (next) {
  if (this.isModified("passwordHash") && this.passwordHash)
    this.passwordHash = await bcrypt.hash(this.passwordHash, 12);
  next();
});

userSchema.methods.comparePassword = function (plain) {
  return bcrypt.compare(plain, this.passwordHash);
};

module.exports = mongoose.model("User", userSchema);
