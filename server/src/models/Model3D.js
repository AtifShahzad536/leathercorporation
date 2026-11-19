const mongoose = require('mongoose');

const meshConfigSchema = new mongoose.Schema({
  meshId: { type: String, required: true },
  name: { type: String, default: '' },
  region: { type: String, default: 'torso' }, // front_body, back_body, left_sleeve, right_sleeve, collar, cuffs, etc.
  isCustomizable: { type: Boolean, default: true },
  defaultColor: { type: String, default: '#0A192F' },
  defaultRoughness: { type: Number, default: 0.6 },
  defaultMetalness: { type: Number, default: 0.05 },
  defaultFabric: { type: String, default: 'micro_interlock' },
  uvMapped: { type: Boolean, default: true },
  allowsDecals: { type: Boolean, default: true },
  allowsPattern: { type: Boolean, default: true },
  allowsText: { type: Boolean, default: true }
}, { _id: false });

const model3DSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  sport: { type: String, required: true, index: true },
  cut: { type: String, default: 'Standard Cut' },
  modelUrl: { type: String, required: true },
  thumbnailUrl: { type: String, default: '' },
  fileSize: { type: Number, default: 0 },
  isDefault: { type: Boolean, default: false },
  isPublished: { type: Boolean, default: true },
  cameraConfig: {
    position: { type: [Number], default: [0, 0, 2.5] },
    target: { type: [Number], default: [0, 0, 0] },
    fov: { type: Number, default: 45 }
  },
  lightingConfig: {
    ambientIntensity: { type: Number, default: 0.8 },
    dirIntensity: { type: Number, default: 1.5 },
    envPreset: { type: String, default: 'city' }
  },
  meshes: [meshConfigSchema],
  availableFabrics: {
    type: [String],
    default: ['micro_interlock', 'pinhole_mesh', 'heavy_cotton_fleece', 'pro_dazzle_polyester', 'compression_spandex', 'ripstop_nylon']
  },
  availablePatterns: {
    type: [String],
    default: ['solid', 'pinstripe', 'gradient', 'digital_camo', 'raglan_splice', 'hex_grid', 'diagonal_stripes']
  },
  version: { type: Number, default: 1 }
}, { timestamps: true });

model3DSchema.index({ sport: 1, isPublished: 1 });

module.exports = mongoose.model('Model3D', model3DSchema);
