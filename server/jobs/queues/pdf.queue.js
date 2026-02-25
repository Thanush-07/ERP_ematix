const { Queue } = require("bullmq");
const { getRedis } = require("../../config/redis");

const pdfQueue = new Queue("pdf-generation", {
  connection: getRedis(),
  defaultJobOptions: { attempts: 2, backoff: { type: "fixed", delay: 3000 } },
});

module.exports = pdfQueue;
