
const logger = require('./logger');

function handleError(error, context) {
  logger.error(`Error in ${context}`, { error });
  return { error: true, message: error.message };
}

module.exports = { handleError };
