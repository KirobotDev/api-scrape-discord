
const { scrapeRandomIds } = require('../../src/scraper');

jest.mock('discord.js'); 

describe('Scraper', () => {
  test('scrapeRandomIds handles invalid IDs', async () => {
    const results = await scrapeRandomIds(1);
    expect(results[0]).toMatch(/User not found|Error/);
  });
});
