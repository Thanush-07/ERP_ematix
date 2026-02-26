const express = require("express");
const router  = express.Router();
const { login, sendOtp, verifyOtp, refreshToken, logout } = require("./auth.controller");
const { authLimiter } = require("../../middleware/rateLimiter.middleware");

router.post("/login",         authLimiter, login);
router.post("/send-otp",      authLimiter, sendOtp);
router.post("/verify-otp",    authLimiter, verifyOtp);
router.post("/refresh-token", refreshToken);
router.post("/logout",        logout);

module.exports = router;
