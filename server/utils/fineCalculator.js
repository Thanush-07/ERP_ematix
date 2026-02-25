/**
 * Calculate fine based on type
 * @param {number} amount  - Outstanding amount
 * @param {number} daysLate
 * @param {object} config  - { type: 'flat'|'percentage'|'perDay', value, graceDays }
 */
const calculateFine = (amount, daysLate, config = {}) => {
  const { type = "flat", value = 0, graceDays = 0 } = config;
  const effectiveDays = Math.max(0, daysLate - graceDays);
  if (effectiveDays === 0) return 0;

  if (type === "flat")       return value;
  if (type === "percentage") return (amount * value) / 100;
  if (type === "perDay")     return value * effectiveDays;
  return 0;
};

module.exports = { calculateFine };
