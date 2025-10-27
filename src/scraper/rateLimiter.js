
const logger = require('../utils/logger');

function handleRateLimit(error) {
  if (error.code === 429) {
    logger.warn('Rate limit hit', { retryAfter: error.retryAfter });
    return { isRateLimited: true, retryAfter: error.retryAfter };
  }
  return { isRateLimited: false };
}

module.exports = { handleRateLimit };
