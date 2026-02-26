const mongoose = require("mongoose");

const canteenItemSchema = new mongoose.Schema({
  name:         { type: String, required: true },
  price:        { type: Number, required: true },
  stock:        { type: Number, default: 0 },
  reorderLevel: { type: Number, default: 5 },
  category:     { type: String },
  isAvailable:  { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model("CanteenItem", canteenItemSchema);
