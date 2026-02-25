const cron = require("node-cron");
const FeeBill = require("../../modules/fees/feeBill.model");
const notificationQueue = require("../queues/notification.queue");

// Run every day at 8am
cron.schedule("0 8 * * *", async () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const bills = await FeeBill.find({
    status: { $in: ["pending","partial"] },
    "items.dueDate": { $gte: today, $lte: tomorrow }
  }).populate("studentId");

  for (const bill of bills) {
    await notificationQueue.add("due-reminder", {
      type: "sms",
      to: bill.studentId?.phone,
      body: `Reminder: Fee payment due tomorrow. Amount: ₹${bill.totalAmount - bill.totalPaid}`,
    });
  }
  console.log(`⏰ Due date reminders queued for ${bills.length} students`);
});
