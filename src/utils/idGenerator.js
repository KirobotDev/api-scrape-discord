
function generateRandomId() {
  const minId = 10n ** 17n;
  const maxId = (10n ** 18n) - 1n;
  const range = maxId - minId;
  const randomBigInt = minId + BigInt(Math.floor(Math.random() * Number(range)));
  return randomBigInt.toString();
}

module.exports = { generateRandomId };
