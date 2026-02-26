const mongoose = require("mongoose");

const feeBillSchema = new mongoose.Schema({
  studentId:   { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  structureId: { type: mongoose.Schema.Types.ObjectId, ref: "FeeStructure" },
  items: [{
    feeHeadId: { type: mongoose.Schema.Types.ObjectId, ref: "FeeHead" },
    amount:    { type: Number },
    paid:      { type: Number, default: 0 },
    dueDate:   { type: Date },
    fine:      { type: Number, default: 0 },
  }],
  totalAmount: { type: Number },
  totalPaid:   { type: Number, default: 0 },
  status:      { type: String, enum: ["pending","partial","paid","overdue"], default: "pending" },
}, { timestamps: true });

module.exports = mongoose.model("FeeBill", feeBillSchema);
