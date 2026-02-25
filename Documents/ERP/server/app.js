const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { errorHandler } = require("./middleware/errorHandler.middleware");

const authRoutes        = require("./modules/auth/auth.routes");
const userRoutes        = require("./modules/users/user.routes");
const studentRoutes     = require("./modules/students/student.routes");
const courseRoutes      = require("./modules/courses/course.routes");
const feeRoutes         = require("./modules/fees/fees.routes");
const paymentRoutes     = require("./modules/payments/payments.routes");
const ledgerRoutes      = require("./modules/ledger/ledger.routes");
const leaveRoutes       = require("./modules/leave/leave.routes");
const outpassRoutes     = require("./modules/outpass/outpass.routes");
const checkinRoutes     = require("./modules/checkin/checkin.routes");
const circularRoutes    = require("./modules/circulars/circular.routes");
const notifRoutes       = require("./modules/notifications/notification.routes");
const inventoryRoutes   = require("./modules/inventory/inventory.routes");
const canteenRoutes     = require("./modules/canteen/canteen.routes");
const shopRoutes        = require("./modules/shop/shop.routes");
const walletRoutes      = require("./modules/wallet/wallet.routes");
const expenseRoutes     = require("./modules/expenses/expense.routes");
const teacherRoutes     = require("./modules/teacher/teacher.routes");
const wardenRoutes      = require("./modules/warden/warden.routes");
const reportRoutes      = require("./modules/reports/reports.routes");

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN || "*", credentials: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/auth",          authRoutes);
app.use("/api/users",         userRoutes);
app.use("/api/students",      studentRoutes);
app.use("/api/courses",       courseRoutes);
app.use("/api/fees",          feeRoutes);
app.use("/api/payments",      paymentRoutes);
app.use("/api/ledger",        ledgerRoutes);
app.use("/api/leave",         leaveRoutes);
app.use("/api/outpass",       outpassRoutes);
app.use("/api/checkin",       checkinRoutes);
app.use("/api/circulars",     circularRoutes);
app.use("/api/notifications", notifRoutes);
app.use("/api/inventory",     inventoryRoutes);
app.use("/api/canteen",       canteenRoutes);
app.use("/api/shop",          shopRoutes);
app.use("/api/wallet",        walletRoutes);
app.use("/api/expenses",      expenseRoutes);
app.use("/api/teacher",       teacherRoutes);
app.use("/api/warden",        wardenRoutes);
app.use("/api/reports",       reportRoutes);

app.use(errorHandler);

module.exports = app;
