
const defaults = require('./defaults');

module.exports = {
  ...defaults,
  discordToken: process.env.DISCORD_TOKEN || require('./index').discordToken,
  logLevel: process.env.LOG_LEVEL || defaults.logLevel,
  dbPath: process.env.DB_PATH || defaults.dbPath,
  apiPort: process.env.API_PORT || defaults.apiPort,
};
