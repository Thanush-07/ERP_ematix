const { sendError } = require("../utils/apiResponse");

/**
 * permit("super_admin", "admin") — allow only listed roles
 */
const permit = (...allowedRoles) => (req, res, next) => {
  if (!req.user || !allowedRoles.includes(req.user.role))
    return sendError(res, 403, "Access denied: insufficient permissions");
  next();
};

module.exports = { permit };
