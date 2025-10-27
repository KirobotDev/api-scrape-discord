
const { scrapeRandomCommand } = require('./scrapeRandom');
const { scrapeListCommand } = require('./scrapeList');
const logger = require('../../utils/logger');

async function registerCommands(client) {
  const commands = [
    {
      name: 'scrape_random',
      description: 'Fetch usernames for random Discord IDs',
      options: [
        {
          name: 'count',
          type: 4, 
          description: 'Number of random IDs to try (1-50)',
          required: true,
        },
      ],
      handler: scrapeRandomCommand,
    },
    {
      name: 'scrape_list',
      description: 'Fetch usernames for a list of Discord IDs',
      options: [
        {
          name: 'ids',
          type: 3, 
          description: 'Comma-separated list of user IDs',
          required: true,
        },
      ],
      handler: scrapeListCommand,
    },
  ];

  try {
    await client.application.commands.set(commands.map(cmd => ({
      name: cmd.name,
      description: cmd.description,
      options: cmd.options,
    })));
    logger.info('Slash commands registered');

    client.on('interactionCreate', async (interaction) => {
      if (!interaction.isCommand()) return;
      const command = commands.find(cmd => cmd.name === interaction.commandName);
      if (command) {
        await command.handler(interaction);
      }
    });
  } catch (error) {
    logger.error('Failed to register commands', { error });
  }
}

module.exports = { registerCommands };
