const Database = require('better-sqlite3');
const db = new Database('dev.db');

console.log('Seeding via better-sqlite3...');

db.exec(`
  -- Ensure tables exist (optional, they should if migrate was run)
  CREATE TABLE IF NOT EXISTS PageView (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sessionId TEXT NOT NULL,
    page TEXT NOT NULL,
    referrer TEXT,
    utmSource TEXT,
    utmMedium TEXT,
    utmCampaign TEXT,
    device TEXT,
    browser TEXT,
    os TEXT,
    country TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS Enquiry (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    deletedAt DATETIME
  );

  CREATE TABLE IF NOT EXISTS Application (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    year TEXT NOT NULL,
    faculty TEXT NOT NULL,
    interest TEXT NOT NULL,
    whyJoin TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    deletedAt DATETIME
  );
`);

// Seed Page Views
const insertView = db.prepare(`
  INSERT INTO PageView (sessionId, page, device, browser, os, createdAt) 
  VALUES (?, ?, ?, ?, ?, ?)
`);

for (let i = 0; i < 30; i++) {
  const date = new Date();
  date.setDate(date.getDate() - i);
  const dateStr = date.toISOString();
  
  const viewCount = Math.floor(Math.random() * 50) + 20;
  for (let j = 0; j < viewCount; j++) {
    insertView.run(
      `demo-session-${i}-${j}`,
      ['/', '/about', '/events', '/join', '/contact'][Math.floor(Math.random() * 5)],
      ['mobile', 'desktop', 'tablet'][Math.floor(Math.random() * 3)],
      ['Chrome', 'Firefox', 'Safari'][Math.floor(Math.random() * 3)],
      ['Windows', 'MacOS', 'iOS', 'Android'][Math.floor(Math.random() * 4)],
      dateStr
    );
  }
}

// Seed Enquiries
const insertEnquiry = db.prepare(`
  INSERT INTO Enquiry (name, email, subject, message, createdAt)
  VALUES (?, ?, ?, ?, ?)
`);
insertEnquiry.run('Arjun Mehta', 'arjun@example.com', 'bls', 'Interested in BLS 2026.', new Date(Date.now() - 86400000).toISOString());
insertEnquiry.run('Priya Singh', 'priya@msruas.ac.in', 'membership', 'How to join Core Executive?', new Date().toISOString());

// Seed Applications
const insertApp = db.prepare(`
  INSERT INTO Application (fullName, email, year, faculty, interest, whyJoin)
  VALUES (?, ?, ?, ?, ?, ?)
`);
insertApp.run('Ananya Rao', 'ananya@msruas.ac.in', 'Year 1', 'FET', 'Management', 'I want to lead.');

console.log('Seed completed successfully!');
db.close();
