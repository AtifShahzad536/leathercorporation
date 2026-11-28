const mongoose = require('mongoose');

const emailEntrySchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, default: '' },
  company: { type: String, default: '' },
  status: { type: String, enum: ['pending', 'sent', 'failed', 'skipped'], default: 'pending' },
  sentAt: Date,
  senderEmail: String,
  senderChannel: String,
  templateUsed: String,
  errorMessage: String,
}, { _id: true });

const emailListSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  totalEmails: { type: Number, default: 0 },
  sentCount: { type: Number, default: 0 },
  failedCount: { type: Number, default: 0 },
  pendingCount: { type: Number, default: 0 },
  status: { type: String, enum: ['active', 'completed', 'paused'], default: 'active' },
  emails: [emailEntrySchema],
}, { timestamps: true });

emailListSchema.methods.recalcCounts = function () {
  this.sentCount = this.emails.filter(e => e.status === 'sent').length;
  this.failedCount = this.emails.filter(e => e.status === 'failed').length;
  this.pendingCount = this.emails.filter(e => e.status === 'pending').length;
  if (this.pendingCount === 0 && this.totalEmails > 0) {
    this.status = 'completed';
  }
};

module.exports = mongoose.model('EmailList', emailListSchema);
