const nodemailer = require('nodemailer');
const SiteSetting = require('../models/SiteSetting');

const SENDER_ACCOUNTS = {
  hostinger: {
    key: 'hostinger',
    displayName: 'Hostinger Business Mail',
    user: process.env.HOSTINGER_SMTP_USER || 'sale@hamlosportswear.site',
    pass: process.env.HOSTINGER_SMTP_PASS || 'Hamlo903@',
    host: process.env.HOSTINGER_SMTP_HOST || 'smtp.hostinger.com',
    port: parseInt(process.env.HOSTINGER_SMTP_PORT || '465', 10),
    secure: String(process.env.HOSTINGER_SMTP_SECURE || 'true') === 'true',
    from: `"HAMLO SPORTS" <${process.env.HOSTINGER_SMTP_USER || 'sale@hamlosportswear.site'}>`,
    replyTo: 'sale@hamlosportswear.site',
    dailyQuota: 12,
    authType: 'smtp',
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
    authType: 'smtp',
  }
};

/**
 * Retrieves the effective configuration for a channel, preferring dynamic database settings in SiteSetting
 * @param {'hostinger'|'gmail'} channel 
 */
const getChannelConfig = async (channel = 'hostinger') => {
  const fallback = SENDER_ACCOUNTS[channel] || SENDER_ACCOUNTS.hostinger;

  try {
    const setting = await SiteSetting.findOne({ key: `email_channel_${channel}` });
    if (setting && setting.value && setting.value.user) {
      return {
        ...fallback,
        ...setting.value,
        key: channel,
        from: `"HAMLO SPORTS" <${setting.value.user}>`,
        replyTo: 'sale@hamlosportswear.site',
      };
    }
  } catch (err) {
    console.warn(`[EMAIL CONFIG] Database read warning for ${channel}:`, err.message);
  }

  return fallback;
};

/**
 * Builds a nodemailer transporter instance from a resolved config object
 * Supports both standard SMTP (User/Pass) and Google OAuth2 (RefreshToken)
 */
const createTransporterFromConfig = (config) => {
  if (config.authType === 'oauth2' && config.refreshToken) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: config.user,
        clientId: config.clientId || process.env.GOOGLE_CLIENT_ID,
        clientSecret: config.clientSecret || process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: config.refreshToken,
        accessToken: config.accessToken,
      },
      connectionTimeout: 12000,
    });
  }

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
 * Creates a transporter instance for a channel, using either dynamic DB config or fallback
 */
const createTransporter = (channel = 'hostinger', directConfig = null) => {
  if (directConfig) {
    return createTransporterFromConfig(directConfig);
  }
  const config = SENDER_ACCOUNTS[channel] || SENDER_ACCOUNTS.hostinger;
  return createTransporterFromConfig(config);
};

/**
 * Resolves async transporter and config from DB
 */
const getDynamicTransporter = async (channel = 'hostinger') => {
  const config = await getChannelConfig(channel);
  const transporter = createTransporterFromConfig(config);
  return { transporter, config };
};

/**
 * Returns clean connection metadata for all email connectors, with secrets masked
 */
const getActiveChannels = async () => {
  const hostingerConfig = await getChannelConfig('hostinger');
  const gmailConfig = await getChannelConfig('gmail');

  return {
    hostinger: {
      key: 'hostinger',
      displayName: hostingerConfig.displayName || 'Hostinger Business Mail',
      email: hostingerConfig.user,
      host: hostingerConfig.host,
      port: hostingerConfig.port,
      secure: hostingerConfig.secure,
      dailyQuota: hostingerConfig.dailyQuota || 12,
      authType: hostingerConfig.authType || 'smtp',
      configured: Boolean(hostingerConfig.user && hostingerConfig.pass),
      connected: Boolean(hostingerConfig.connected !== false && hostingerConfig.pass),
      lastVerified: hostingerConfig.lastVerified || null,
    },
    gmail: {
      key: 'gmail',
      displayName: gmailConfig.displayName || 'Google Workspace / Gmail',
      email: gmailConfig.user,
      host: gmailConfig.host,
      port: gmailConfig.port,
      dailyQuota: gmailConfig.dailyQuota || 12,
      authType: gmailConfig.authType || 'smtp',
      configured: Boolean(gmailConfig.pass || gmailConfig.refreshToken),
      connected: Boolean(gmailConfig.connected !== false && (gmailConfig.pass || gmailConfig.refreshToken)),
      hasOAuth: Boolean(gmailConfig.refreshToken),
      needsAppPassword: !Boolean(gmailConfig.pass || gmailConfig.refreshToken),
      lastVerified: gmailConfig.lastVerified || null,
      oauthAvailable: Boolean(process.env.GOOGLE_CLIENT_ID),
    }
  };
};

module.exports = createTransporter;
module.exports.createTransporter = createTransporter;
module.exports.createTransporterFromConfig = createTransporterFromConfig;
module.exports.getChannelConfig = getChannelConfig;
module.exports.getDynamicTransporter = getDynamicTransporter;
module.exports.getActiveChannels = getActiveChannels;
module.exports.SENDER_ACCOUNTS = SENDER_ACCOUNTS;
