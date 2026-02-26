const jwt  = require("jsonwebtoken");
const User = require("../users/user.model");
const { generateOTP, storeOTP, verifyOTP } = require("../../utils/otpHelper");

const signToken = (user) =>
  jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });

exports.loginWithPassword = async (identifier, password) => {
  const user = await User.findOne({
    $or: [{ email: identifier }, { phone: identifier }],
    isActive: true,
  });
  if (!user) throw new Error("User not found");
  const valid = await user.comparePassword(password);
  if (!valid) throw new Error("Invalid credentials");
  const token = signToken(user);
  return { token, user: { id: user._id, name: user.name, role: user.role } };
};

exports.sendOtp = async (phone) => {
  const user = await User.findOne({ phone, isActive: true });
  if (!user) throw new Error("Phone not registered");
  const otp = generateOTP();
  await storeOTP(phone, otp);
  // TODO: integrate MSG91 SMS send here
  console.log(`OTP for ${phone}: ${otp}`);
};

exports.verifyOtp = async (phone, otp) => {
  const valid = await verifyOTP(phone, otp);
  if (!valid) throw new Error("Invalid or expired OTP");
  const user  = await User.findOne({ phone, isActive: true });
  const token = signToken(user);
  return { token, user: { id: user._id, name: user.name, role: user.role } };
};

exports.refreshToken = async (refreshToken) => {
  const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
  const user    = await User.findById(decoded.id);
  if (!user) throw new Error("User not found");
  return { token: signToken(user) };
};
