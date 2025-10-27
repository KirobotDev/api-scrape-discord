
const express = require('express');
const { config } = require('../config/environment');
const scrapeRouter = require('./routes/scrape');
const logger = require('../utils/logger');

const app = express();

app.use(express.json());
app.use('/scrape', scrapeRouter);

function startApi() {
  app.listen(config.apiPort, () => {
    logger.info(`API server running on port ${config.apiPort}`);
  });
}

module.exports = { startApi };
