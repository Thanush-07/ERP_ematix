// Auto-logs all mutating requests (POST/PUT/PATCH/DELETE) to audit_logs collection
const auditMiddleware = async (req, res, next) => {
  if (["POST", "PUT", "PATCH", "DELETE"].includes(req.method)) {
    // Attach audit info to request for service layer to use
    req.audit = {
      actor:    req.user?.id,
      role:     req.user?.role,
      action:   `${req.method} ${req.originalUrl}`,
      timestamp: new Date(),
    };
  }
  next();
};

module.exports = auditMiddleware;
