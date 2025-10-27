
const { db } = require('../index');
const logger = require('../../utils/logger');

async function saveUser(id, pseudo) {
  return new Promise((resolve, reject) => {
    db.run(
      'INSERT OR REPLACE INTO users (id, pseudo) VALUES (?, ?)',
      [id, pseudo],
      (err) => {
        if (err) {
          logger.error('Failed to save user to database', { error: err });
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
}

async function getUser(id) {
  return new Promise((resolve) => {
    db.get('SELECT pseudo FROM users WHERE id = ?', [id], (err, row) => {
      if (err) {
        logger.error('Failed to get user from database', { error: err });
        resolve(null);
      } else {
        resolve(row ? row.pseudo : null);
      }
    });
  });
}

module.exports = { saveUser, getUser };
