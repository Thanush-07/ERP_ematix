// Generates: 2024CS0042
const Student = require("../modules/students/student.model");

const generateRegNumber = async (year, courseCode) => {
  const prefix = `${year}${courseCode.toUpperCase()}`;
  const count  = await Student.countDocuments({ regNumber: new RegExp(`^${prefix}`) });
  const seq    = String(count + 1).padStart(4, "0");
  return `${prefix}${seq}`;
};

module.exports = { generateRegNumber };
