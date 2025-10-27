
const fs = require('fs').promises;
const path = require('path');

const cachePath = path.join(__dirname, '../../data/cache/cache.json');

async function loadFromFileCache() {
  try {
    const data = await fs.readFile(cachePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return {};
  }
}

async function saveToFileCache(id, pseudo) {
  const cache = await loadFromFileCache();
  cache[id] = pseudo;
  await fs.writeFile(cachePath, JSON.stringify(cache, null, 2));
}

module.exports = { loadFromFileCache, saveToFileCache };
