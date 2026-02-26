const mongoose = require("mongoose");

const canteenPurchaseSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  items: [{
    itemId:   { type: mongoose.Schema.Types.ObjectId, ref: "CanteenItem" },
    quantity: { type: Number },
    price:    { type: Number },
  }],
  total:      { type: Number, required: true },
  method:     { type: String, enum: ["wallet","cash"], default: "cash" },
  billedBy:   { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

module.exports = mongoose.model("CanteenPurchase", canteenPurchaseSchema);
