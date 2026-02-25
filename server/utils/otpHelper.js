const { getRedis } = require("../config/redis");

const OTP_TTL = 300; // 5 minutes

const generateOTP = () => String(Math.floor(100000 + Math.random() * 900000));

const storeOTP = async (key, otp) => {
  const client = getRedis();
  await client.set(`otp:${key}`, otp, "EX", OTP_TTL);
};

const verifyOTP = async (key, otp) => {
  const client  = getRedis();
  const stored  = await client.get(`otp:${key}`);
  if (stored !== otp) return false;
  await client.del(`otp:${key}`);
  return true;
};

module.exports = { generateOTP, storeOTP, verifyOTP };
