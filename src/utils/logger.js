
const winston = require('winston');
const { config } = require('../config/environment');

const logger = winston.createLogger({
  level: config.logLevel,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'data/logs/app.log' }),
    new winston.transports.Console(),
  ],
});

module.exports = logger;
