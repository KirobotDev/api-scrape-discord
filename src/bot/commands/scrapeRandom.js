
const { EmbedBuilder } = require('discord.js');
const { scrapeRandomIds } = require('../../scraper');
const logger = require('../../utils/logger');

async function scrapeRandomCommand(interaction) {
  await interaction.deferReply();
  const count = interaction.options.getInteger('count');

  if (count < 1 || count > 50) {
    return interaction.editReply('Please choose between 1 and 50 attempts.');
  }

  try {
    const results = await scrapeRandomIds(count);
    const embed = new EmbedBuilder()
      .setTitle(`Results for ${count} Random IDs`)
      .setDescription(results.length ? results.join('\n') : 'No results.')
      .setColor(0x00ff00);
    await interaction.editReply({ embeds: [embed] });
  } catch (error) {
    logger.error('Error in scrape_random command', { error });
    await interaction.editReply('An error occurred while scraping.');
  }
}

module.exports = { scrapeRandomCommand };
