const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  date: { type: Date, required: true, unique: true, index: true },
  pageViews: { type: Number, default: 0 },
  inquiries: { type: Number, default: 0 },
  emailsSent: { type: Number, default: 0 },
  emailsFailed: { type: Number, default: 0 },
  newLeads: { type: Number, default: 0 },
  topPages: [{ page: String, views: Number }],
  topProducts: [{ product: String, views: Number }],
}, { timestamps: true });

module.exports = mongoose.model('Analytics', analyticsSchema);
