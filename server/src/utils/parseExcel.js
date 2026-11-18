const XLSX = require('xlsx');

/**
 * Parse an uploaded Excel or CSV file and extract email entries.
 * Expects columns: email (required), name (optional), company (optional)
 */
const parseExcelFile = (filePath) => {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json(sheet, { defval: '' });

  const emails = [];
  const seen = new Set();

  for (const row of rows) {
    // Try multiple column name variations
    const email = (
      row.email || row.Email || row.EMAIL ||
      row['E-mail'] || row['e-mail'] || row['Email Address'] ||
      row['email_address'] || ''
    ).toString().trim().toLowerCase();

    if (!email || !email.includes('@') || seen.has(email)) continue;
    seen.add(email);

    const name = (
      row.name || row.Name || row.NAME ||
      row['Full Name'] || row['full_name'] ||
      row['First Name'] || row['first_name'] || ''
    ).toString().trim();

    const company = (
      row.company || row.Company || row.COMPANY ||
      row['Company Name'] || row['Organization'] || ''
    ).toString().trim();

    emails.push({ email, name, company, status: 'pending' });
  }

  return emails;
};

module.exports = parseExcelFile;
