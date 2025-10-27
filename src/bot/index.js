
const { startBot } = require('./client');
const logger = require('../utils/logger');

async function main() {
  try {
    await startBot();
    logger.info('Bot started successfully');
  } catch (error) {
    logger.error('Failed to start bot', { error });
    process.exit(1);
  }
}

main();
