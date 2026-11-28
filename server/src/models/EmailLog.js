const mongoose = require('mongoose');

const emailLogSchema = new mongoose.Schema({
  to: { type: String, required: true },
  from: String,
  senderChannel: { type: String, enum: ['hostinger', 'gmail', 'default'], default: 'hostinger' },
  subject: String,
  templateId: { type: mongoose.Schema.Types.ObjectId, ref: 'EmailTemplate' },
  templateName: String,
  status: { type: String, enum: ['sent', 'failed'], required: true },
  error: String,
  listId: { type: mongoose.Schema.Types.ObjectId, ref: 'EmailList' },
}, { timestamps: true });

emailLogSchema.index({ createdAt: -1 });
emailLogSchema.index({ status: 1, createdAt: -1 });

module.exports = mongoose.model('EmailLog', emailLogSchema);
