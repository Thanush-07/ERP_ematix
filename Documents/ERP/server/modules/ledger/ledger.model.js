const mongoose = require("mongoose");

const ledgerSchema = new mongoose.Schema({
  studentId:     { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  type:          { type: String, enum: ["debit","credit"], required: true },
  amount:        { type: Number, required: true },
  description:   { type: String },
  referenceId:   { type: mongoose.Schema.Types.ObjectId },
  referenceType: { type: String }, // "Payment", "FeeBill", "Refund"
}, { timestamps: true });

// Immutable — no updates
ledgerSchema.pre(["updateOne","findOneAndUpdate"], function () {
  throw new Error("Ledger entries are immutable");
});

module.exports = mongoose.model("Ledger", ledgerSchema);
