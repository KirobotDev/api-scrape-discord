
const express = require('express');
const { scrapeRandomIds } = require('../../scraper');
const logger = require('../../utils/logger');

const router = express.Router();

router.post('/random', async (req, res) => {
  const { count } = req.body;
  if (!count || count < 1 || count > 50) {
    return res.status(400).json({ error: 'Count must be between 1 and 50' });
  }

  try {
    const results = await scrapeRandomIds(count);
    res.json({ results });
  } catch (error) {
    logger.error('Error in API /scrape/random', { error });
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
