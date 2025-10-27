
const sqlite3 = require('sqlite3').verbose();
const { config } = require('../config/environment');
const logger = require('../utils/logger');

let db;

function connectDatabase() {
  db = new sqlite3.Database(config.dbPath, (err) => {
    if (err) {
      logger.error('Failed to connect to database', { error: err });
    } else {
      logger.info('Connected to SQLite database');
    }
  });

  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      pseudo TEXT,
      fetched_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

module.exports = { connectDatabase, db };
