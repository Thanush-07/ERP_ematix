// Generates: RCP-2024-00042
let counter = 0;
const generateReceiptNumber = (year = new Date().getFullYear()) => {
  counter++;
  return `RCP-${year}-${String(counter).padStart(5, "0")}`;
};
module.exports = { generateReceiptNumber };
