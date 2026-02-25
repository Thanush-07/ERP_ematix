const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");
const { connectDB } = require("./config/db");
const { connectRedis } = require("./config/redis");
require("./jobs");

const PORT = process.env.PORT || 5000;

(async () => {
  await connectDB();
  await connectRedis();
  app.listen(PORT, () =>
    console.log(`🚀 Server running on http://localhost:${PORT}`)
  );
})();
