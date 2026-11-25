const mongoose = require('mongoose');

const clubRegistrationSchema = new mongoose.Schema({
  registrationId: { 
    type: String, 
    unique: true, 
    required: true, 
    default: () => `HAMLO-CLUB-${Math.floor(100000 + Math.random() * 900000)}` 
  },
  clubName: { type: String, required: true, trim: true },
  sport: { type: String, required: true },
  orgType: { type: String, required: true }, // School, Club, Academy, University, League, Rec Program, Private Org
  league: { type: String, default: '' },
  description: { type: String, default: '' },

  // Contact & Coach Details
  contactName: { type: String, required: true, trim: true },
  role: { type: String, default: 'Head Coach' },
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, required: true, trim: true },
  preferredContact: { type: String, default: 'Email' }, // Email, Phone, WhatsApp

  // Players & Logo
  totalPlayers: { type: String, default: '15-30' },
  totalTeams: { type: String, default: '1-2' },
  teamColors: { type: String, default: '' },
  logoUrl: { type: String, default: '' },
  uniformNeeds: { type: String, default: '' },

  // Billing & Shipping Address
  country: { type: String, default: 'United States' },
  address: { type: String, default: '' },
  city: { type: String, default: '' },
  state: { type: String, default: '' },
  zip: { type: String, default: '' },
  isTaxExempt: { type: Boolean, default: false },

  // Discount & Partnership Terms
  discountPercentage: { type: Number, default: 20 },
  discountCode: { type: String, default: '' },
  discountTier: { type: String, default: 'Gold Partner (20%)' },
  discountStatus: { 
    type: String, 
    enum: ['active', 'pending', 'expired'], 
    default: 'pending' 
  },
  discountNotes: { type: String, default: '' },
  approvedAt: { type: Date },

  // Administrative
  status: { 
    type: String, 
    enum: ['new', 'contacted', 'approved', 'archived'], 
    default: 'new' 
  },
  notes: { type: String, default: '' },
  assignedRep: { type: String, default: 'Senior Sports Uniform Specialist' }
}, { timestamps: true });

clubRegistrationSchema.index({ createdAt: -1 });
clubRegistrationSchema.index({ registrationId: 1 });
clubRegistrationSchema.index({ email: 1 });
clubRegistrationSchema.index({ clubName: 1 });

module.exports = mongoose.model('ClubRegistration', clubRegistrationSchema);
