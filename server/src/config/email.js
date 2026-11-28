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

// Short-lived in-memory token cache for Google OAuth2 (1 hour lifetime)
let cachedGmailToken = {
  token: null,
  expiresAt: 0,
};

/**
 * Exchanges a Google OAuth refresh token for a fresh short-lived access token
 */
const getGmailAccessToken = async (clientId, clientSecret, refreshToken) => {
  if (cachedGmailToken.token && Date.now() < cachedGmailToken.expiresAt - 60000) {
    return cachedGmailToken.token;
  }

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    }).toString(),
    signal: AbortSignal.timeout(5000),
  });

  const tokenData = await tokenRes.json();
  if (!tokenData.access_token) {
    throw new Error(tokenData.error_description || tokenData.error || 'Failed to refresh Google OAuth token');
  }

  cachedGmailToken = {
    token: tokenData.access_token,
    expiresAt: Date.now() + ((tokenData.expires_in || 3600) * 1000),
  };

  return cachedGmailToken.token;
};

/**
 * Sends an email directly via the official Google Gmail REST API (HTTPS port 443).
 * Extremely fast (~200ms) and immune to SMTP port blocks or XOAUTH2 scope restrictions.
 */
const sendViaGmailRestApi = async ({ user, clientId, clientSecret, refreshToken, to, subject, html, text, from, replyTo }) => {
  const accessToken = await getGmailAccessToken(clientId, clientSecret, refreshToken);

  const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString('base64')}?=`;
  const messageParts = [
    `From: ${from || `"HAMLO SPORTS" <${user}>`}`,
    `To: ${to}`,
    replyTo ? `Reply-To: ${replyTo}` : '',
    `Subject: ${utf8Subject}`,
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=utf-8',
    '',
    html || text || '',
  ].filter(Boolean).join('\r\n');

  const rawBase64Url = Buffer.from(messageParts)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  const sendRes = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ raw: rawBase64Url }),
    signal: AbortSignal.timeout(6000),
  });

  const sendResult = await sendRes.json();
  if (!sendRes.ok || sendResult.error) {
    throw new Error(sendResult.error?.message || 'Google Gmail API send error');
  }

  return { messageId: sendResult.id, response: '250 OK' };
};

/**
 * Retrieves the effective configuration for a channel, preferring dynamic database settings in SiteSetting
 * @param {'hostinger'|'gmail'} channel 
 */
const getChannelConfig = async (channel = 'hostinger') => {
  const fallback = SENDER_ACCOUNTS[channel] || SENDER_ACCOUNTS.hostinger;

  try {
    const setting = await SiteSetting.findOne({ key: `email_channel_${channel}` });
    let resolved = (setting && setting.value && setting.value.user) 
      ? { ...fallback, ...setting.value } 
      : { ...fallback };

    if (channel === 'gmail') {
      // Ensure Google OAuth Client ID & Secret are always injected from DB or env
      if (!resolved.clientId || !resolved.clientSecret) {
        const oauthSetting = await SiteSetting.findOne({ key: 'google_oauth_credentials' });
        if (oauthSetting && oauthSetting.value) {
          resolved.clientId = resolved.clientId || oauthSetting.value.clientId || process.env.GOOGLE_CLIENT_ID;
          resolved.clientSecret = resolved.clientSecret || oauthSetting.value.clientSecret || process.env.GOOGLE_CLIENT_SECRET;
        } else {
          resolved.clientId = resolved.clientId || process.env.GOOGLE_CLIENT_ID;
          resolved.clientSecret = resolved.clientSecret || process.env.GOOGLE_CLIENT_SECRET;
        }
      }
    }

    return {
      ...resolved,
      key: channel,
      from: `"HAMLO SPORTS" <${resolved.user}>`,
      replyTo: 'sale@hamlosportswear.site',
    };
  } catch (err) {
    console.warn(`[EMAIL CONFIG] Database read warning for ${channel}:`, err.message);
  }

  return fallback;
};

/**
 * Builds a unified transporter instance from a resolved config object.
 * - For Gmail with OAuth2: uses high-speed HTTPS REST API (~200ms, zero port blockage).
 * - For Hostinger or SMTP: uses Nodemailer with aggressive 5s fast-fail timeouts.
 */
const createTransporterFromConfig = (config) => {
  if (config.authType === 'oauth2' && config.refreshToken) {
    const clientId = config.clientId || process.env.GOOGLE_CLIENT_ID;
    const clientSecret = config.clientSecret || process.env.GOOGLE_CLIENT_SECRET;
    const refreshToken = config.refreshToken;
    const user = config.user;

    return {
      sendMail: async ({ from, to, subject, html, text, replyTo }) => {
        return sendViaGmailRestApi({
          user,
          clientId,
          clientSecret,
          refreshToken,
          to,
          subject,
          html,
          text,
          from: from || config.from,
          replyTo: replyTo || config.replyTo,
        });
      },
      verify: async () => {
        await getGmailAccessToken(clientId, clientSecret, refreshToken);
        return true;
      },
    };
  }

  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
    connectionTimeout: 5000,
    greetingTimeout: 4000,
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
module.exports.sendViaGmailRestApi = sendViaGmailRestApi;
module.exports.getGmailAccessToken = getGmailAccessToken;
