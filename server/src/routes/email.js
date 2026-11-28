const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const os = require('os');
const EmailList = require('../models/EmailList');
const EmailTemplate = require('../models/EmailTemplate');
const EmailLog = require('../models/EmailLog');
const parseExcelFile = require('../utils/parseExcel');
const { createTransporter, SENDER_ACCOUNTS, getActiveChannels } = require('../config/email');
const { sendDailyEmails, ensureDefaultTemplates } = require('../cron/emailCron');
const { protect } = require('../middleware/auth');

const router = express.Router();

const isServerless = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.NOW_REGION);

const emailStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const targetDir = isServerless ? os.tmpdir() : path.join(__dirname, '../../uploads');
    if (!fs.existsSync(targetDir)) {
      try { fs.mkdirSync(targetDir, { recursive: true }); } catch (e) {}
    }
    cb(null, targetDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname) || '';
    cb(null, `email-${Date.now()}${ext}`);
  }
});

const upload = multer({
  storage: emailStorage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (['.xlsx', '.xls', '.csv'].includes(ext)) return cb(null, true);
    cb(new Error('Only Excel (.xlsx, .xls) or CSV files allowed'));
  },
});

// ── EMAIL LISTS ──

// GET /api/email/lists - All lists (returns status & whether new leads are needed)
router.get('/lists', protect, async (req, res) => {
  try {
    const lists = await EmailList.find()
      .select('-emails')
      .sort('-createdAt');
    
    // Check if any active list exists with pending leads
    const hasActivePending = lists.some(l => l.status === 'active' && l.pendingCount > 0);
    
    res.json({
      success: true,
      data: lists,
      needsLeadsList: !hasActivePending,
      alertMessage: !hasActivePending ? '⚠️ All email lead lists completed or none active. Please upload a new leads list.' : null
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/email/lists/:id - Single list with emails
router.get('/lists/:id', protect, async (req, res) => {
  try {
    const list = await EmailList.findById(req.params.id);
    if (!list) return res.status(404).json({ success: false, message: 'List not found' });
    res.json({ success: true, data: list });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/email/lists/upload - Upload Excel file
router.post('/lists/upload', protect, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    const emails = parseExcelFile(req.file.path);
    if (fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    if (emails.length === 0) {
      return res.status(400).json({ success: false, message: 'No valid emails found in file. Ensure file contains an "email" column.' });
    }

    const list = await EmailList.create({
      fileName: req.file.originalname,
      totalEmails: emails.length,
      pendingCount: emails.length,
      emails,
    });

    res.status(201).json({
      success: true,
      message: `Successfully extracted and uploaded ${emails.length} leads from ${req.file.originalname}`,
      data: {
        id: list._id,
        fileName: list.fileName,
        totalEmails: list.totalEmails,
        pendingCount: list.pendingCount,
        status: list.status,
      },
    });
  } catch (error) {
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ success: false, message: error.message });
  }
});

// PATCH /api/email/lists/:id/status - Pause/Resume list
router.patch('/lists/:id/status', protect, async (req, res) => {
  try {
    const list = await EmailList.findById(req.params.id);
    if (!list) return res.status(404).json({ success: false, message: 'Not found' });

    list.status = req.body.status;
    await list.save();

    res.json({ success: true, data: { id: list._id, status: list.status } });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// DELETE /api/email/lists/:id - Delete list
router.delete('/lists/:id', protect, async (req, res) => {
  try {
    await EmailList.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'List deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ── EMAIL TEMPLATES ──

// GET /api/email/templates
router.get('/templates', protect, async (req, res) => {
  try {
    await ensureDefaultTemplates();
    const templates = await EmailTemplate.find().sort('-createdAt');
    res.json({ success: true, data: templates });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/email/templates/seed-defaults - Force sync/seed all 10 templates
router.post('/templates/seed-defaults', protect, async (req, res) => {
  try {
    await ensureDefaultTemplates();
    const templates = await EmailTemplate.find().sort('-createdAt');
    res.json({
      success: true,
      message: `Successfully synced ${templates.length} distinct marketing templates!`,
      data: templates,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/email/templates
router.post('/templates', protect, async (req, res) => {
  try {
    const template = await EmailTemplate.create(req.body);
    res.status(201).json({ success: true, data: template });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// PUT /api/email/templates/:id
router.put('/templates/:id', protect, async (req, res) => {
  try {
    const template = await EmailTemplate.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!template) return res.status(404).json({ success: false, message: 'Template not found' });
    res.json({ success: true, data: template });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// DELETE /api/email/templates/:id
router.delete('/templates/:id', protect, async (req, res) => {
  try {
    await EmailTemplate.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Template deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ── EMAIL LOGS ──

// GET /api/email/logs
router.get('/logs', protect, async (req, res) => {
  try {
    const { page = 1, limit = 50, status } = req.query;
    const filter = {};
    if (status) filter.status = status;

    const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);
    const total = await EmailLog.countDocuments(filter);
    const logs = await EmailLog.find(filter)
      .sort('-createdAt')
      .skip(skip)
      .limit(parseInt(limit, 10));

    res.json({
      success: true,
      data: logs,
      pagination: {
        total,
        page: parseInt(page, 10),
        pages: Math.ceil(total / parseInt(limit, 10)),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/email/stats - Email dashboard metrics
router.get('/stats', protect, async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const totalSent = await EmailLog.countDocuments({ status: 'sent' });
    const sentToday = await EmailLog.countDocuments({ status: 'sent', createdAt: { $gte: today } });
    const totalFailed = await EmailLog.countDocuments({ status: 'failed' });

    const activeLists = await EmailList.find({ status: 'active' });
    const totalPending = activeLists.reduce((sum, l) => sum + l.pendingCount, 0);
    const needsLeadsList = totalPending === 0;

    // Last 30 days send history
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const dailySends = await EmailLog.aggregate([
      { $match: { createdAt: { $gte: thirtyDaysAgo }, status: 'sent' } },
      { $group: {
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
        count: { $sum: 1 },
      }},
      { $sort: { _id: 1 } },
    ]);

    res.json({
      success: true,
      data: {
        totalSent,
        sentToday,
        totalFailed,
        totalPending,
        needsLeadsList,
        dailySends,
        dailyQuota: 24,
        hostingerQuota: 12,
        gmailQuota: 12,
        channels: getActiveChannels(),
        schedule: 'Daily at 9:00 AM EST (USA Morning) • Dual Channels (24 Leads/Day)',
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET / POST /api/email/cron-trigger - Automated cron trigger (Vercel Cron / External Scheduler)
router.all('/cron-trigger', async (req, res) => {
  try {
    const cronSecret = process.env.CRON_SECRET;
    const authHeader = req.headers.authorization;
    const userAgent = req.headers['user-agent'] || '';
    const isVercelCronAgent = userAgent.includes('vercel-cron');

    if (cronSecret) {
      const isAuthorized = 
        authHeader === `Bearer ${cronSecret}` || 
        req.query.secret === cronSecret;

      if (!isAuthorized && !isVercelCronAgent) {
        return res.status(401).json({
          success: false,
          message: 'Unauthorized cron trigger. Provide valid CRON_SECRET.',
        });
      }
    }

    console.log(`[CRON TRIGGER] ⏰ Triggered daily dual batch (24 leads) at ${new Date().toISOString()} (Agent: ${userAgent})`);
    const result = await sendDailyEmails();

    res.json({
      success: result.success !== false,
      schedule: '09:00 AM EST (14:00 UTC) • 12 Hostinger + 12 Gmail = 24 Leads/Day',
      timestamp: new Date().toISOString(),
      result,
    });
  } catch (error) {
    console.error('[CRON TRIGGER] Fatal error:', error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/email/send-batch - Admin trigger: immediately dispatch the next dual pending batch (24 leads)
router.post('/send-batch', protect, async (req, res) => {
  try {
    const result = await sendDailyEmails();
    res.json({
      success: result.success !== false,
      message: result.message || 'Dual batch dispatched successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/email/test-send - Admin trigger: send a test email to verify Hostinger or Gmail SMTP
router.post('/test-send', protect, async (req, res) => {
  try {
    const { to, templateId, customSubject, customBody, channel = 'hostinger' } = req.body;
    if (!to) {
      return res.status(400).json({ success: false, message: 'Recipient email address (to) is required.' });
    }

    const selectedChannel = channel === 'gmail' ? 'gmail' : 'hostinger';
    const senderConfig = SENDER_ACCOUNTS[selectedChannel];

    if (selectedChannel === 'gmail' && !senderConfig.pass) {
      return res.status(400).json({
        success: false,
        message: 'Gmail App Password not set yet. Please generate a 16-character Google App Password for hamlosportswear@gmail.com and add it to server/.env.',
      });
    }

    let subject = customSubject || `HAMLO SPORTS • ${senderConfig.displayName} Delivery Verification`;
    let html = customBody;

    if (templateId) {
      const tpl = await EmailTemplate.findById(templateId);
      if (tpl) {
        subject = tpl.subject.replace(/{{name}}/gi, 'Valued Partner').replace(/{{company}}/gi, 'Hamlo Athletic');
        html = tpl.htmlBody.replace(/{{name}}/gi, 'Valued Partner').replace(/{{email}}/gi, to).replace(/{{company}}/gi, 'Hamlo Athletic');
      }
    }

    if (!html) {
      html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #1E1B6E; margin-bottom: 8px;">HAMLO SPORTS • Delivery Verification</h2>
          <p style="color: #475569; font-size: 14px; line-height: 1.6;">
            This is a real-time verification email confirming that your <strong>${senderConfig.displayName}</strong> (${senderConfig.user}) is configured and functioning correctly.
          </p>
          <div style="background: #f8fafc; padding: 12px; border-left: 4px solid #F26522; margin: 16px 0; font-size: 12px; font-family: monospace;">
            Channel: ${selectedChannel.toUpperCase()}<br/>
            Sender Account: ${senderConfig.user}<br/>
            Gateway: ${senderConfig.host}:${senderConfig.port}<br/>
            Delivered To: ${to}<br/>
            Timestamp: ${new Date().toISOString()}
          </div>
          <p style="color: #64748b; font-size: 12px;">HAMLO SPORTS • Sialkot, Pakistan • High Performance Custom Teamwear</p>
        </div>
      `;
    }

    const transporter = createTransporter(selectedChannel);

    await transporter.sendMail({
      from: senderConfig.from,
      replyTo: senderConfig.replyTo,
      to,
      subject,
      html,
    });

    await EmailLog.create({
      to,
      from: senderConfig.user,
      senderChannel: selectedChannel,
      subject,
      templateName: templateId ? 'Template Test' : `${senderConfig.displayName} Test`,
      status: 'sent',
    });

    res.json({
      success: true,
      message: `Test email successfully delivered via ${senderConfig.displayName} (${senderConfig.user}) to ${to}! Check your inbox.`,
    });
  } catch (error) {
    console.error('[Email Test] Send error:', error);
    await EmailLog.create({
      to: req.body.to || 'unknown',
      from: req.body.channel === 'gmail' ? SENDER_ACCOUNTS.gmail.user : SENDER_ACCOUNTS.hostinger.user,
      senderChannel: req.body.channel || 'hostinger',
      subject: 'Test Email (Failed)',
      status: 'failed',
      error: error.message,
    });

    res.status(500).json({
      success: false,
      message: `Delivery failed via ${req.body.channel || 'hostinger'}: ${error.message}.`,
    });
  }
});

module.exports = router;
