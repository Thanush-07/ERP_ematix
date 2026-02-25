const { Worker } = require("bullmq");
const { getRedis } = require("../../config/redis");
const transporter  = require("../../config/mailer");

const worker = new Worker("notifications", async (job) => {
  const { type, to, subject, body } = job.data;
  if (type === "email") {
    await transporter.sendMail({ from: process.env.EMAIL_FROM, to, subject, html: body });
    console.log(`📧 Email sent to ${to}`);
  }
  if (type === "sms") {
    // TODO: MSG91 SMS integration
    console.log(`📱 SMS to ${to}: ${body}`);
  }
}, { connection: getRedis() });

worker.on("failed", (job, err) => console.error(`Notification job ${job.id} failed:`, err));

module.exports = worker;
