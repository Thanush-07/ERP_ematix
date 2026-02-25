const jwt = require("jsonwebtoken");
const { sendError } = require("../utils/apiResponse");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer "))
    return sendError(res, 401, "No token provided");

  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return sendError(res, 401, "Invalid or expired token");
  }
};

module.exports = authMiddleware;
