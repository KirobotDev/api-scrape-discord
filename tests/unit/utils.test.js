
const { generateRandomId } = require('../../src/utils');

describe('Utils', () => {
  test('generateRandomId produces valid ID', () => {
    const id = generateRandomId();
    expect(id).toMatch(/^[0-9]{17,18}$/);
  });
});
