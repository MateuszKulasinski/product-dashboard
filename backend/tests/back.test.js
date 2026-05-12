const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

const path = './data/items.json';

function reset() {
    fs.writeFileSync(path, JSON.stringify(['A', 'B'], null, 2));
}

const logic = require('../logic');

test('walidacja: poprawny produkt', () => {
    assert.strictEqual(logic.validateItem('Laptop'), true);
});

test('obliczenia: getStats zwraca poprawną liczbę', () => {
    reset();

    const stats = logic.getStats('test-instance');

    assert.strictEqual(stats.liczba, 2);
    assert.strictEqual(stats.instance, 'test-instance');
});

test('logika: addItem dodaje element', () => {
    reset();

    const before = logic.readItems().length;
    logic.addItem('Klawiatura');
    const after = logic.readItems().length;

    assert.strictEqual(after, before + 1);
});