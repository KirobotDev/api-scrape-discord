
const { scrapeQueue } = require('./queue');
const { saveToCache, loadFromCache } = require('../cache');
const { generateRandomId } = require('../utils');
const logger = require('../utils/logger');

async function scrapeRandomIds(numAttempts) {
  const results = [];
  const cache = await loadFromCache();

  for (let i = 0; i < numAttempts; i++) {
    const randomId = generateRandomId();

    if (cache[randomId]) {
      results.push(`- ${cache[randomId]} (ID: ${randomId}) (cached)`);
      continue;
    }

    const result = await scrapeQueue.add(async () => {
      try {
        const user = await scrapeQueue.client.users.fetch(randomId);
        const pseudo = user.discriminator === '0' ? user.username : `${user.username}#${user.discriminator}`;
        await saveToCache(randomId, pseudo);
        return `- ${pseudo} (ID: ${randomId})`;
      } catch (error) {
        if (error.code === 10013) {
          return `- ID ${randomId}: User not found.`;
        }
        return `- ID ${randomId}: Error (${error.message}).`;
      }
    });

    results.push(result);
  }

  return results;
}

async function scrapeUserIds(ids) {
  const results = [];
  const cache = await loadFromCache();

  for (const id of ids) {
    if (cache[id]) {
      results.push(`- ${cache[id]} (ID: ${id}) (cached)`);
      continue;
    }

    const result = await scrapeQueue.add(async () => {
      try {
        const user = await scrapeQueue.client.users.fetch(id);
        const pseudo = user.discriminator === '0' ? user.username : `${user.username}#${user.discriminator}`;
        await saveToCache(id, pseudo);
        return `- ${pseudo} (ID: ${id})`;
      } catch (error) {
        if (error.code === 10013) {
          return `- ID ${id}: User not found.`;
        }
        return `- ID ${id}: Error (${error.message}).`;
      }
    });

    results.push(result);
  }

  return results;
}

module.exports = { scrapeRandomIds, scrapeUserIds };
