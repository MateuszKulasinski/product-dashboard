const test = require('node:test');
const assert = require('node:assert');
const { subtract } = require('../logic');

test('Odejmowanie', () => {
  assert.strictEqual(subtract(5, 3), 2);
});