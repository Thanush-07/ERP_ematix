const AuthService = require("./auth.service");
const { sendSuccess, sendError } = require("../../utils/apiResponse");

exports.login = async (req, res) => {
  try {
    const { identifier, password } = req.body;
    const result = await AuthService.loginWithPassword(identifier, password);
    sendSuccess(res, 200, result, "Login successful");
  } catch (err) { sendError(res, 401, err.message); }
};

exports.sendOtp = async (req, res) => {
  try {
    const { phone } = req.body;
    await AuthService.sendOtp(phone);
    sendSuccess(res, 200, null, "OTP sent");
  } catch (err) { sendError(res, 400, err.message); }
};

exports.verifyOtp = async (req, res) => {
  try {
    const { phone, otp } = req.body;
    const result = await AuthService.verifyOtp(phone, otp);
    sendSuccess(res, 200, result, "OTP verified");
  } catch (err) { sendError(res, 400, err.message); }
};

exports.refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    const result = await AuthService.refreshToken(refreshToken);
    sendSuccess(res, 200, result);
  } catch (err) { sendError(res, 401, err.message); }
};

exports.logout = async (req, res) => {
  sendSuccess(res, 200, null, "Logged out");
};
