
const logger = require('../utils/logger');

function rateLimitMiddleware(interaction, next) {
  logger.info(`Command ${interaction.commandName} executed by ${interaction.user.id}`);
  next();
}

module.exports = { rateLimitMiddleware };
