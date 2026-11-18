const mongoose = require('mongoose');

const emailTemplateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  htmlBody: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  sendCount: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('EmailTemplate', emailTemplateSchema);
