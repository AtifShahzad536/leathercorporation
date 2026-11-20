const cron = require('node-cron');
const EmailList = require('../models/EmailList');
const EmailTemplate = require('../models/EmailTemplate');
const EmailLog = require('../models/EmailLog');
const createTransporter = require('../config/email');

const BATCH_SIZE = 10; // Send exactly 10 emails per day

const sendDailyEmails = async () => {
  console.log('[EMAIL CRON] 🚀 Starting daily email marketing batch...');

  try {
    // 1. Find the first active list that has pending emails
    const activeList = await EmailList.findOne({ status: 'active', pendingCount: { $gt: 0 } });

    if (!activeList) {
      console.log('[EMAIL CRON] ⚠️  ALL LISTS COMPLETED OR NONE ACTIVE — SYSTEM STATUS: "NEEDS LEADS LIST"!');
      return { success: false, message: 'All email lists completed or none active. Please upload a new leads list.' };
    }

    // 2. Get all active templates for alternating / rotating emails
    const templates = await EmailTemplate.find({ isActive: true });

    if (templates.length === 0) {
      console.log('[EMAIL CRON] ⚠️  No active email templates found. Skipping batch.');
      return { success: false, message: 'No active email templates found. Please create or activate at least one template.' };
    }

    // 3. Pick next BATCH_SIZE pending emails
    const pendingEmails = activeList.emails
      .filter(e => e.status === 'pending')
      .slice(0, BATCH_SIZE);

    if (pendingEmails.length === 0) {
      activeList.recalcCounts();
      await activeList.save();
      console.log(`[EMAIL CRON] List "${activeList.fileName}" has no pending emails.`);
      return { success: false, message: `List "${activeList.fileName}" has no pending leads.` };
    }

    console.log(`[EMAIL CRON] Sending batch of ${pendingEmails.length} emails from "${activeList.fileName}"...`);

    // 4. Create Nodemailer transporter
    const transporter = createTransporter();

    let batchSent = 0;
    let batchFailed = 0;

    // 5. Send each email, alternating templates
    for (let i = 0; i < pendingEmails.length; i++) {
      const entry = pendingEmails[i];
      // Rotate templates so users receive alternating templates
      const template = templates[i % templates.length];

      try {
        let html = template.htmlBody
          .replace(/{{name}}/gi, entry.name || 'Team Director')
          .replace(/{{email}}/gi, entry.email)
          .replace(/{{company}}/gi, entry.company || 'Athletic Program');

        let subject = template.subject
          .replace(/{{name}}/gi, entry.name || 'Team Director')
          .replace(/{{company}}/gi, entry.company || 'Athletic Program');

        const fromSender = process.env.SMTP_USER 
          ? `"HAMLO SPORTS" <${process.env.SMTP_USER}>` 
          : (process.env.EMAIL_FROM || 'sale@hamlosportswear.site');

        await transporter.sendMail({
          from: fromSender,
          replyTo: process.env.EMAIL_FROM || 'sale@hamlosportswear.site',
          to: entry.email,
          subject,
          html,
        });

        // Update entry status
        const emailDoc = activeList.emails.id(entry._id);
        if (emailDoc) {
          emailDoc.status = 'sent';
          emailDoc.sentAt = new Date();
          emailDoc.templateUsed = template.name;
        }

        // Log success
        await EmailLog.create({
          to: entry.email,
          subject,
          templateId: template._id,
          templateName: template.name,
          status: 'sent',
          listId: activeList._id,
        });

        template.sendCount = (template.sendCount || 0) + 1;
        await template.save();
        batchSent++;

        console.log(`  ✅ [${i + 1}/${pendingEmails.length}] Sent to: ${entry.email} (Template: ${template.name})`);
      } catch (sendError) {
        batchFailed++;
        const emailDoc = activeList.emails.id(entry._id);
        if (emailDoc) {
          emailDoc.status = 'failed';
          emailDoc.errorMessage = sendError.message;
        }

        await EmailLog.create({
          to: entry.email,
          subject: template.subject,
          templateId: template._id,
          templateName: template.name,
          status: 'failed',
          error: sendError.message,
          listId: activeList._id,
        });

        console.log(`  ❌ [${i + 1}/${pendingEmails.length}] Failed: ${entry.email} - ${sendError.message}`);
      }
    }

    // 6. Recalculate counts and save
    activeList.recalcCounts();
    await activeList.save();

    console.log(`[EMAIL CRON] Batch complete! Status for "${activeList.fileName}": ${activeList.sentCount}/${activeList.totalEmails} sent.`);

    // 7. Check if list is completed and if any other active list exists
    if (activeList.status === 'completed') {
      const nextActive = await EmailList.findOne({ status: 'active', pendingCount: { $gt: 0 } });
      if (!nextActive) {
        console.log('═══════════════════════════════════════════════════════');
        console.log('🚨 ALERT: ALL LEADS LISTS COMPLETED! PLEASE UPLOAD NEW LEADS LIST!');
        console.log('═══════════════════════════════════════════════════════');
      }
    }

    return {
      success: true,
      sent: batchSent,
      failed: batchFailed,
      total: pendingEmails.length,
      listName: activeList.fileName,
      message: `Successfully processed batch of ${pendingEmails.length} leads: ${batchSent} sent, ${batchFailed} failed.`,
    };
  } catch (error) {
    console.error('[EMAIL CRON] Fatal batch error:', error.message);
    return { success: false, message: error.message };
  }
};

// Schedule: Run every day at 9:00 AM
const startEmailCron = () => {
  cron.schedule('0 9 * * *', () => {
    sendDailyEmails();
  });
  console.log('📧 Email Marketing Cron scheduled: Daily at 9:00 AM');
};

module.exports = { startEmailCron, sendDailyEmails };
