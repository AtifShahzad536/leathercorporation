const XLSX = require('xlsx');

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * Parse an uploaded Excel (.xlsx, .xls) or CSV file and extract email entries.
 * Supports memory Buffer (Vercel serverless) and local file path.
 * Autodetects email columns, full/first names, and company/organization names.
 */
const parseExcelFile = (input) => {
  let workbook;
  if (Buffer.isBuffer(input)) {
    workbook = XLSX.read(input, { type: 'buffer', raw: false });
  } else if (typeof input === 'string') {
    workbook = XLSX.readFile(input, { raw: false });
  } else if (input && input.buffer) {
    workbook = XLSX.read(input.buffer, { type: 'buffer', raw: false });
  } else {
    throw new Error('Invalid file input for Excel/CSV parser');
  }

  const sheetName = workbook.SheetNames[0];
  if (!sheetName) throw new Error('Uploaded spreadsheet has no sheets.');
  const sheet = workbook.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json(sheet, { defval: '' });

  const emails = [];
  const seen = new Set();

  for (const row of rows) {
    const keys = Object.keys(row);
    let email = '';
    let name = '';
    let company = '';

    // Pass 1: Look by known column header keywords (case-insensitive & stripped)
    for (const key of keys) {
      const normalizedKey = key.trim().toLowerCase().replace(/[\s_-]+/g, '');
      const val = String(row[key] || '').trim();
      if (!val) continue;

      if (!email && (
        normalizedKey === 'email' ||
        normalizedKey === 'emails' ||
        normalizedKey === 'emailaddress' ||
        normalizedKey === 'contactemail' ||
        normalizedKey === 'mail' ||
        normalizedKey === 'primaryemail'
      )) {
        email = val;
      } else if (!name && (
        normalizedKey === 'name' ||
        normalizedKey === 'fullname' ||
        normalizedKey === 'firstname' ||
        normalizedKey === 'contactname' ||
        normalizedKey === 'client' ||
        normalizedKey === 'clientname' ||
        normalizedKey === 'leadname' ||
        normalizedKey === 'owner' ||
        normalizedKey === 'contact' ||
        normalizedKey === 'recipient'
      )) {
        name = val;
      } else if (!company && (
        normalizedKey === 'company' ||
        normalizedKey === 'companyname' ||
        normalizedKey === 'organization' ||
        normalizedKey === 'org' ||
        normalizedKey === 'business' ||
        normalizedKey === 'club' ||
        normalizedKey === 'team' ||
        normalizedKey === 'clubname' ||
        normalizedKey === 'brand' ||
        normalizedKey === 'school'
      )) {
        company = val;
      }
    }

    // Pass 2: Fallback email detection by scanning any cell containing an '@'
    if (!email) {
      for (const key of keys) {
        const val = String(row[key] || '').trim();
        if (val.includes('@')) {
          const match = val.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
          if (match) {
            email = match[0];
            break;
          }
        }
      }
    }

    if (!email) continue;
    email = email.toLowerCase().trim();

    if (!seen.has(email)) {
      seen.add(email);
      emails.push({
        email,
        name: name.slice(0, 100),
        company: company.slice(0, 100),
        status: 'pending'
      });
    }
  }

  return emails;
};

module.exports = parseExcelFile;
