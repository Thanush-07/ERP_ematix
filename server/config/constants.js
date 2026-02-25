const ROLES = {
  SUPER_ADMIN: "super_admin",
  ADMIN: "admin",
  ACCOUNTS_STAFF: "accounts_staff",
  TEACHER: "teacher",
  HOSTEL_WARDEN: "hostel_warden",
  SHOP_OPERATOR: "shop_operator",
  CANTEEN_OPERATOR: "canteen_operator",
  STUDENT: "student",
  PARENT: "parent",
};

const LEAVE_STATUS = { PENDING: "pending", APPROVED: "approved", DENIED: "denied" };
const OUTPASS_STATUS = { PENDING: "pending", APPROVED: "approved", DENIED: "denied" };
const PAYMENT_STATUS = { PENDING: "pending", PAID: "paid", PARTIAL: "partial", OVERDUE: "overdue" };

module.exports = { ROLES, LEAVE_STATUS, OUTPASS_STATUS, PAYMENT_STATUS };
