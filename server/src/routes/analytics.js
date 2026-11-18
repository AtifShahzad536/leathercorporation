const express = require('express');
const Product = require('../models/Product');
const EmailList = require('../models/EmailList');
const EmailLog = require('../models/EmailLog');
const Page = require('../models/Page');
const { protect } = require('../middleware/auth');

const router = express.Router();

// GET /api/analytics/dashboard - Main dashboard analytics and chart metrics
router.get('/dashboard', protect, async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Counts
    const totalProducts = await Product.countDocuments({ isActive: true });
    const totalPages = await Page.countDocuments();
    
    // Email metrics
    const totalEmailsSent = await EmailLog.countDocuments({ status: 'sent' });
    const emailsSentToday = await EmailLog.countDocuments({ status: 'sent', createdAt: { $gte: today } });
    
    // Lead stats
    const allLists = await EmailList.find().select('totalEmails sentCount pendingCount status');
    const totalLeads = allLists.reduce((sum, l) => sum + l.totalEmails, 0);
    const activeLists = allLists.filter(l => l.status === 'active');
    const totalPending = activeLists.reduce((sum, l) => sum + l.pendingCount, 0);
    const needsLeadsList = totalPending === 0;

    // Top viewed products
    const topProducts = await Product.find({ isActive: true })
      .sort('-viewCount')
      .limit(8)
      .select('name sport price viewCount');

    // Email sends chart (last 14 days)
    const fourteenDaysAgo = new Date();
    fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);

    const emailChart = await EmailLog.aggregate([
      { $match: { createdAt: { $gte: fourteenDaysAgo } } },
      { $group: {
        _id: {
          date: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          status: '$status'
        },
        count: { $sum: 1 },
      }},
      { $sort: { '_id.date': 1 } },
    ]);

    // Format chart for Recharts frontend
    const chartMap = {};
    emailChart.forEach(item => {
      const d = item._id.date;
      if (!chartMap[d]) chartMap[d] = { date: d, sent: 0, failed: 0 };
      if (item._id.status === 'sent') chartMap[d].sent = item.count;
      if (item._id.status === 'failed') chartMap[d].failed = item.count;
    });
    const formattedChart = Object.values(chartMap).sort((a, b) => a.date.localeCompare(b.date));

    // Pages last updated
    const recentPages = await Page.find()
      .sort('-updatedAt')
      .limit(5)
      .select('slug title updatedAt');

    res.json({
      success: true,
      data: {
        stats: {
          totalProducts,
          totalPages,
          totalEmailsSent,
          emailsSentToday,
          totalLeads,
          totalPending,
          needsLeadsList,
        },
        topProducts,
        emailChart: formattedChart,
        recentPages,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
