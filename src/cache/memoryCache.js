
const cache = new Map();

function getFromMemoryCache() {
  return Object.fromEntries(cache);
}

function setInMemoryCache(id, pseudo) {
  cache.set(id, pseudo);
}

module.exports = { getFromMemoryCache, setInMemoryCache };
