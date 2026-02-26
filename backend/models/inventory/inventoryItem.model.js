const mongoose = require("mongoose");

const inventoryItemSchema = new mongoose.Schema({
  name:      { type: String, required: true },
  category:  { type: String, enum: ["academic","hostel","general"], default: "general" },
  unit:      { type: String, default: "pcs" },
  stock:     { type: Number, default: 0 },
  reorderLevel: { type: Number, default: 5 },
  location:  { type: String }, // e.g. "Block-A", "Main Store"
}, { timestamps: true });

module.exports = mongoose.model("InventoryItem", inventoryItemSchema);
