
const { EmbedBuilder } = require('discord.js');
const { scrapeUserIds } = require('../../scraper');
const logger = require('../../utils/logger');

async function scrapeListCommand(interaction) {
  await interaction.deferReply();
  const ids = interaction.options.getString('ids').split(',').map(id => id.trim());

  if (ids.length > 50) {
    return interaction.editReply('Please provide up to 50 IDs.');
  }

  try {
    const results = await scrapeUserIds(ids);
    const embed = new EmbedBuilder()
      .setTitle('Results for Provided IDs')
      .setDescription(results.length ? results.join('\n') : 'No results.')
      .setColor(0x00ff00);
    await interaction.editReply({ embeds: [embed] });
  } catch (error) {
    logger.error('Error in scrape_list command', { error });
    await interaction.editReply('An error occurred while scraping.');
  }
}

module.exports = { scrapeListCommand };
