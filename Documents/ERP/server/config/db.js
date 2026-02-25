const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = process.env.NODE_ENV === "production"
    ? process.env.MONGO_URI_PROD
    : process.env.MONGO_URI;
  await mongoose.connect(uri);
  console.log("✅ MongoDB connected");
};

const disconnectDB = async () => {
  await mongoose.disconnect();
  console.log("🔌 MongoDB disconnected");
};

module.exports = { connectDB, disconnectDB };
