
const { Client, GatewayIntentBits } = require('discord.js');
const { registerCommands } = require('./commands');
const { config } = require('../config/environment');
const logger = require('../utils/logger');

async function startBot() {
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
  });

  client.once('ready', () => {
    logger.info(`Bot connected as ${client.user.tag}`);
    registerCommands(client);
  });

  await client.login(config.discordToken);
  return client;
}

module.exports = { startBot };
