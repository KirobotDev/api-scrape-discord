
const { Client } = require('discord.js');
const PQueue = require('p-queue');
const { config } = require('../config/environment');

const scrapeQueue = new PQueue({
  intervalCap: config.maxRequestsPerSecond,
  interval: 1000,
});

scrapeQueue.client = new Client({ intents: [] }); 

module.exports = { scrapeQueue };
