
const { saveToFileCache, loadFromFileCache } = require('./fileCache');
const { getFromMemoryCache, setInMemoryCache } = require('./memoryCache');

async function saveToCache(id, pseudo) {
  await saveToFileCache(id, pseudo);
  setInMemoryCache(id, pseudo);
}

async function loadFromCache() {
  const fileCache = await loadFromFileCache();
  return { ...fileCache, ...getFromMemoryCache() };
}

module.exports = { saveToCache, loadFromCache };
