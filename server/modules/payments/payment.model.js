const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  studentId:    { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  billId:       { type: mongoose.Schema.Types.ObjectId, ref: "FeeBill" },
  amount:       { type: Number, required: true },
  method:       { type: String, enum: ["online","cash","cheque"], required: true },
  status:       { type: String, enum: ["pending","success","failed"], default: "pending" },
  razorpayOrderId:   { type: String },
  razorpayPaymentId: { type: String },
  receiptNumber:     { type: String },
  receiptUrl:        { type: String },
  recordedBy:   { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

module.exports = mongoose.model("Payment", paymentSchema);
