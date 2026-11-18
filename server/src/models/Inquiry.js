const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, default: '' },
  company: { type: String, default: '' }, // School / Club / Brand
  sport: { type: String, default: 'General' },
  product: { type: String, default: '' },
  quantity: { type: Number, default: 25 },
  message: { type: String, required: true },
  status: { type: String, enum: ['new', 'in_progress', 'quoted', 'closed'], default: 'new' },
  source: { type: String, default: 'website_form' }, // 'website_form' | 'chat_widget' | 'quote_modal'
  notes: { type: String, default: '' },
}, { timestamps: true });

inquirySchema.index({ createdAt: -1 });
inquirySchema.index({ status: 1 });

module.exports = mongoose.model('Inquiry', inquirySchema);
