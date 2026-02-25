const Ledger = require("../modules/ledger/ledger.model");

const createDebit = async ({ studentId, amount, description, referenceId, referenceType }) => {
  return Ledger.create({ studentId, type: "debit", amount, description, referenceId, referenceType });
};

const createCredit = async ({ studentId, amount, description, referenceId, referenceType }) => {
  return Ledger.create({ studentId, type: "credit", amount, description, referenceId, referenceType });
};

const getBalance = async (studentId) => {
  const entries = await Ledger.find({ studentId });
  const debit   = entries.filter(e => e.type === "debit").reduce((s, e) => s + e.amount, 0);
  const credit  = entries.filter(e => e.type === "credit").reduce((s, e) => s + e.amount, 0);
  return { debit, credit, balance: debit - credit };
};

module.exports = { createDebit, createCredit, getBalance };
