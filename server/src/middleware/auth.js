const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const JWT_SECRETS = [
  process.env.JWT_SECRET,
  'hamlo_sports_jwt_secret_key_2026_change_this',
  'hamlo_sports_secret',
].filter(Boolean);

const verifyTokenRobustly = (token) => {
  for (const secret of JWT_SECRETS) {
    try {
      const decoded = jwt.verify(token, secret);
      if (decoded && decoded.id) return decoded;
    } catch (e) {}
  }
  return null;
};

const protect = async (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ success: false, message: 'Not authorized, no token' });
    }

    const decoded = verifyTokenRobustly(token);
    if (!decoded) {
      return res.status(401).json({ success: false, message: 'Not authorized, token invalid or expired' });
    }

    const admin = await Admin.findById(decoded.id);

    if (!admin || !admin.isActive) {
      return res.status(401).json({ success: false, message: 'Not authorized, user inactive or not found' });
    }

    req.admin = admin;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Not authorized, auth verification failed' });
  }
};

const superAdminOnly = (req, res, next) => {
  if (req.admin?.role !== 'superadmin') {
    return res.status(403).json({ success: false, message: 'Superadmin access required' });
  }
  next();
};

module.exports = { protect, superAdminOnly };
