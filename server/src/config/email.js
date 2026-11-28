const nodemailer = require('nodemailer');

const SENDER_ACCOUNTS = {
  hostinger: {
    key: 'hostinger',
    displayName: 'Hostinger Business Mail',
    // Verified working credentials on smtp.hostinger.com:465
    user: process.env.HOSTINGER_SMTP_USER || 'sale@hamlosportswear.site',
    pass: process.env.HOSTINGER_SMTP_PASS || 'Hamlo903@',
    host: process.env.HOSTINGER_SMTP_HOST || 'smtp.hostinger.com',
    port: parseInt(process.env.HOSTINGER_SMTP_PORT || '465', 10),
    secure: String(process.env.HOSTINGER_SMTP_SECURE || 'true') === 'true',
    from: `"HAMLO SPORTS" <${process.env.HOSTINGER_SMTP_USER || 'sale@hamlosportswear.site'}>`,
    replyTo: 'sale@hamlosportswear.site',
    dailyQuota: 12,
  },
  gmail: {
    key: 'gmail',
    displayName: 'Google Workspace / Gmail',
    user: process.env.GMAIL_SMTP_USER || 'hamlosportswear@gmail.com',
    pass: process.env.GMAIL_SMTP_PASS || process.env.SMTP_PASS || '',
    host: process.env.GMAIL_SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.GMAIL_SMTP_PORT || '587', 10),
    secure: false,
    from: `"HAMLO SPORTS" <${process.env.GMAIL_SMTP_USER || 'hamlosportswear@gmail.com'}>`,
    replyTo: 'sale@hamlosportswear.site',
    dailyQuota: 12,
  }
};

/**
 * Creates a Nodemailer transporter for either Hostinger or Gmail
 * @param {'hostinger'|'gmail'} channel 
 */
const createTransporter = (channel = 'hostinger') => {
  const config = SENDER_ACCOUNTS[channel] || SENDER_ACCOUNTS.hostinger;

  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
    connectionTimeout: 12000,
    greetingTimeout: 10000,
  });
};

/**
 * Returns configuration metadata for all sender channels
 */
const getActiveChannels = () => {
  return {
    hostinger: {
      key: 'hostinger',
      displayName: SENDER_ACCOUNTS.hostinger.displayName,
      email: SENDER_ACCOUNTS.hostinger.user,
      configured: Boolean(SENDER_ACCOUNTS.hostinger.user && SENDER_ACCOUNTS.hostinger.pass),
      dailyQuota: SENDER_ACCOUNTS.hostinger.dailyQuota,
      host: SENDER_ACCOUNTS.hostinger.host,
      port: SENDER_ACCOUNTS.hostinger.port,
    },
    gmail: {
      key: 'gmail',
      displayName: SENDER_ACCOUNTS.gmail.displayName,
      email: SENDER_ACCOUNTS.gmail.user,
      configured: Boolean(SENDER_ACCOUNTS.gmail.user && SENDER_ACCOUNTS.gmail.pass),
      dailyQuota: SENDER_ACCOUNTS.gmail.dailyQuota,
      host: SENDER_ACCOUNTS.gmail.host,
      port: SENDER_ACCOUNTS.gmail.port,
      needsAppPassword: !Boolean(SENDER_ACCOUNTS.gmail.pass),
    }
  };
};

module.exports = createTransporter;
module.exports.createTransporter = createTransporter;
module.exports.SENDER_ACCOUNTS = SENDER_ACCOUNTS;
module.exports.getActiveChannels = getActiveChannels;
