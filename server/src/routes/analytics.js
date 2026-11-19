const express = require('express');
const Product = require('../models/Product');
const EmailList = require('../models/EmailList');
const EmailLog = require('../models/EmailLog');
const Page = require('../models/Page');
const Inquiry = require('../models/Inquiry');
const Model3D = require('../models/Model3D');
const CustomDesign = require('../models/CustomDesign');
const { protect } = require('../middleware/auth');

const router = express.Router();

// GET /api/analytics/dashboard - Comprehensive dashboard metrics, charts & recent records
router.get('/dashboard', protect, async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Counts
    const totalProducts = await Product.countDocuments({ isActive: true });
    const totalPages = await Page.countDocuments();
    const totalModels3D = await Model3D.countDocuments();
    const publishedModels3D = await Model3D.countDocuments({ isPublished: true });
    
    // Inquiries & Custom Quotes
    const totalInquiries = await Inquiry.countDocuments();
    const newInquiries = await Inquiry.countDocuments({ status: 'new' });
    const totalCustomDesigns = await CustomDesign.countDocuments();

    // Email metrics
    const totalEmailsSent = await EmailLog.countDocuments({ status: 'sent' });
    const emailsSentToday = await EmailLog.countDocuments({ status: 'sent', createdAt: { $gte: today } });
    
    // Lead stats
    const allLists = await EmailList.find().select('totalEmails sentCount pendingCount status');
    const totalLeads = allLists.reduce((sum, l) => sum + l.totalEmails, 0);
    const activeLists = allLists.filter(l => l.status === 'active');
    const totalPending = activeLists.reduce((sum, l) => sum + l.pendingCount, 0);

    // Top viewed products
    const topProducts = await Product.find({ isActive: true })
      .sort('-viewCount')
      .limit(6)
      .select('name sport price viewCount');

    // Recent Inquiries for Dashboard Table
    const recentInquiries = await Inquiry.find()
      .sort('-createdAt')
      .limit(6)
      .select('name email company sport quantity status createdAt');

    // Recent 3D Models for Dashboard
    const recentModels = await Model3D.find()
      .sort('-updatedAt')
      .limit(5)
      .select('name sport cut isPublished isDefault meshes updatedAt');

    // Sports Distribution (Products count by Sport)
    const sportsAgg = await Product.aggregate([
      { $match: { isActive: true } },
      { $group: { _id: '$sport', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);
    const sportsDistribution = sportsAgg.map(s => ({
      sport: s._id || 'Other',
      products: s.count
    }));

    // Inquiries & Quotes 14-day history
    const fourteenDaysAgo = new Date();
    fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);

    const inquiriesAgg = await Inquiry.aggregate([
      { $match: { createdAt: { $gte: fourteenDaysAgo } } },
      { $group: {
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
        count: { $sum: 1 }
      }},
      { $sort: { '_id': 1 } }
    ]);

    const designsAgg = await CustomDesign.aggregate([
      { $match: { createdAt: { $gte: fourteenDaysAgo } } },
      { $group: {
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
        count: { $sum: 1 }
      }},
      { $sort: { '_id': 1 } }
    ]);

    // Build continuous 14-day timeline
    const dateMap = {};
    for (let i = 13; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = d.toISOString().split('T')[0];
      const label = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      dateMap[key] = { date: key, label, inquiries: 0, customDesigns: 0, emails: 0 };
    }

    inquiriesAgg.forEach(i => {
      if (dateMap[i._id]) dateMap[i._id].inquiries = i.count;
    });

    designsAgg.forEach(d => {
      if (dateMap[d._id]) dateMap[d._id].customDesigns = d.count;
    });

    // Email sends chart
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

    emailChart.forEach(item => {
      const d = item._id.date;
      if (dateMap[d] && item._id.status === 'sent') {
        dateMap[d].emails = item.count;
      }
    });

    const activityTimeline = Object.values(dateMap).sort((a, b) => a.date.localeCompare(b.date));

    res.json({
      success: true,
      data: {
        stats: {
          totalProducts,
          totalPages,
          totalModels3D,
          publishedModels3D,
          totalInquiries,
          newInquiries,
          totalCustomDesigns,
          totalEmailsSent,
          emailsSentToday,
          totalLeads,
          totalPending,
        },
        topProducts,
        recentInquiries,
        recentModels,
        sportsDistribution,
        activityTimeline,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;