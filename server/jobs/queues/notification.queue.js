const { Queue } = require("bullmq");
const { getRedis } = require("../../config/redis");

const notificationQueue = new Queue("notifications", {
  connection: getRedis(),
  defaultJobOptions: { attempts: 3, backoff: { type: "exponential", delay: 5000 } },
});

module.exports = notificationQueue;
