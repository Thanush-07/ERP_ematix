const mongoose = require("mongoose");

const feeStructureSchema = new mongoose.Schema({
  courseId:  { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  year:      { type: Number, required: true },
  academic:  { type: String, required: true }, // "2024-25"
  items: [{
    feeHeadId: { type: mongoose.Schema.Types.ObjectId, ref: "FeeHead" },
    amount:    { type: Number, required: true },
    dueDate:   { type: Date },
  }],
}, { timestamps: true });

module.exports = mongoose.model("FeeStructure", feeStructureSchema);
