const mongoose = require('mongoose');

const customDesignSchema = new mongoose.Schema({
  designCode: { type: String, required: true, unique: true, index: true },
  modelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Model3D' },
  productSlug: { type: String, default: '' },
  sport: { type: String, required: true },
  cut: { type: String, default: 'Standard Cut' },
  configuration: {
    meshCustomizations: { type: mongoose.Schema.Types.Mixed, default: {} },
    globalPalette: {
      primary: { type: String, default: '#0A192F' },
      secondary: { type: String, default: '#F5A623' },
      accent: { type: String, default: '#FFFFFF' }
    },
    nameNumber: {
      teamName: { type: String, default: 'EAGLES' },
      playerName: { type: String, default: 'JOHNSON' },
      playerNumber: { type: String, default: '23' },
      font: { type: String, default: 'Impact' },
      textColor: { type: String, default: '#F5A623' },
      strokeColor: { type: String, default: '#000000' },
      hasFrontNumber: { type: Boolean, default: true },
      hasBackName: { type: Boolean, default: true },
      hasBackNumber: { type: Boolean, default: true }
    },
    logos: [{
      id: String,
      url: String,
      name: String,
      placement: String, // chest, back, left_sleeve, right_sleeve
      x: Number,
      y: Number,
      scale: Number,
      rotation: Number
    }],
    pattern: {
      id: { type: String, default: 'solid' },
      scale: { type: Number, default: 1 },
      color: { type: String, default: '#F5A623' }
    },
    fabric: { type: String, default: 'micro_interlock' }
  },
  previewImage: { type: String, default: '' },
  rosterCount: { type: Number, default: 20 },
  estimatedUnitPrice: { type: Number, default: 44.99 },
  estimatedTotalPrice: { type: Number, default: 899.80 },
  customerInfo: {
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    phone: { type: String, default: '' },
    organization: { type: String, default: '' }
  },
  status: { type: String, enum: ['draft', 'submitted', 'quoted', 'in_production'], default: 'draft' }
}, { timestamps: true });

module.exports = mongoose.model('CustomDesign', customDesignSchema);
