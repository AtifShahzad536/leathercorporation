const express = require('express');
const ClubRegistration = require('../models/ClubRegistration');
const Inquiry = require('../models/Inquiry');
const { protect } = require('../middleware/auth');

const router = express.Router();

// GET /api/clubs - List all registered clubs (Admin only)
router.get('/', protect, async (req, res) => {
  try {
    const { status, page = 1, limit = 50, search } = req.query;
    const filter = {};
    if (status && status !== 'all') filter.status = status;
    if (search) {
      filter.$or = [
        { clubName: { $regex: search, $options: 'i' } },
        { contactName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { sport: { $regex: search, $options: 'i' } },
        { registrationId: { $regex: search, $options: 'i' } },
      ];
    }

    const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);
    const total = await ClubRegistration.countDocuments(filter);
    const clubs = await ClubRegistration.find(filter)
      .sort('-createdAt')
      .skip(skip)
      .limit(parseInt(limit, 10));

    const counts = {
      all: await ClubRegistration.countDocuments(),
      new: await ClubRegistration.countDocuments({ status: 'new' }),
      contacted: await ClubRegistration.countDocuments({ status: 'contacted' }),
      approved: await ClubRegistration.countDocuments({ status: 'approved' }),
    };

    res.json({
      success: true,
      data: clubs,
      counts,
      pagination: {
        total,
        page: parseInt(page, 10),
        pages: Math.ceil(total / parseInt(limit, 10)),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/clubs/:id - Get single registration details (Admin only)
router.get('/:id', protect, async (req, res) => {
  try {
    const club = await ClubRegistration.findById(req.params.id);
    if (!club) return res.status(404).json({ success: false, message: 'Club registration not found' });
    res.json({ success: true, data: club });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PATCH /api/clubs/:id - Update status/notes (Admin only)
router.patch('/:id', protect, async (req, res) => {
  try {
    const { status, notes, assignedRep } = req.body;
    const club = await ClubRegistration.findByIdAndUpdate(
      req.params.id,
      { $set: { ...(status && { status }), ...(notes !== undefined && { notes }), ...(assignedRep && { assignedRep }) } },
      { new: true }
    );
    if (!club) return res.status(404).json({ success: false, message: 'Club registration not found' });
    res.json({ success: true, data: club, message: 'Registration updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/clubs/register - Submit Club Registration (PUBLIC)
router.post('/register', async (req, res) => {
  try {
    const {
      clubName,
      sport,
      orgType,
      league,
      description,
      contactName,
      role,
      email,
      phone,
      preferredContact,
      totalPlayers,
      totalTeams,
      teamColors,
      logoUrl,
      uniformNeeds,
      country,
      address,
      city,
      state,
      zip,
      isTaxExempt,
      recaptchaToken
    } = req.body;

    if (!clubName || !sport || !contactName || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Club name, sport, contact name, email, and phone number are required.'
      });
    }

    // Google reCAPTCHA v3 verification (if configured)
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (secretKey && secretKey !== 'your_recaptcha_v3_secret_key_here') {
      if (recaptchaToken) {
        try {
          const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
              secret: secretKey,
              response: recaptchaToken,
              remoteip: req.ip || req.connection?.remoteAddress,
            }),
          });
          const verifyData = await verifyRes.json();
          if (!verifyData.success || (verifyData.score !== undefined && verifyData.score < 0.35)) {
            console.warn('[reCAPTCHA Flagged Club Registration]', verifyData);
          }
        } catch (captchaErr) {
          console.warn('[reCAPTCHA Verification Warning]', captchaErr.message);
        }
      }
    }

    // 1. Create Club Registration in MongoDB
    const registration = await ClubRegistration.create({
      clubName,
      sport,
      orgType: orgType || 'Club',
      league: league || '',
      description: description || '',
      contactName,
      role: role || 'Head Coach',
      email,
      phone,
      preferredContact: preferredContact || 'Email',
      totalPlayers: totalPlayers || '15-30',
      totalTeams: totalTeams || '1-2',
      teamColors: teamColors || '',
      logoUrl: logoUrl || '',
      uniformNeeds: uniformNeeds || '',
      country: country || 'United States',
      address: address || '',
      city: city || '',
      state: state || '',
      zip: zip || '',
      isTaxExempt: Boolean(isTaxExempt),
      status: 'new'
    });

    // 2. Also record in Inquiry so it immediately appears in the Admin Quotes & Inquiries Inbox
    try {
      await Inquiry.create({
        name: `${contactName} (${clubName})`,
        email,
        phone,
        company: clubName,
        sport,
        quantity: parseInt(totalPlayers, 10) || 25,
        message: `🏆 NEW CLUB PARTNERSHIP REGISTRATION [ID: ${registration.registrationId}]\n` +
          `• Club/Team: ${clubName} (${sport})\n` +
          `• Org Type: ${orgType || 'Club'} | League: ${league || 'N/A'}\n` +
          `• Contact: ${contactName} (${role || 'Head Coach'})\n` +
          `• Phone: ${phone} | Preferred: ${preferredContact || 'Email'}\n` +
          `• Teams: ${totalTeams || 'N/A'} | Players: ${totalPlayers || 'N/A'}\n` +
          `• Team Colors: ${teamColors || 'N/A'}\n` +
          `• Address: ${address || ''}, ${city || ''}, ${state || ''} ${zip || ''}, ${country || 'USA'}\n` +
          `• Needs/Notes: ${description || uniformNeeds || 'Standard factory volume quote'}`,
        source: 'club_registration',
        status: 'new'
      });
    } catch (inqErr) {
      console.warn('Inquiry mirror warning:', inqErr.message);
    }

    res.status(201).json({
      success: true,
      data: registration,
      message: 'Club registration submitted successfully! Your volume discounts are now activated.'
    });
  } catch (error) {
    console.error('Club registration error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
