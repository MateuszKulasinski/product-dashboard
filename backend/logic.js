const fs = require('fs');

const sciezka = './data/items.json';

function readItems() {
    return JSON.parse(fs.readFileSync(sciezka, 'utf-8'));
}

function addItem(item) {
    const items = readItems();
    items.push(item);
    fs.writeFileSync(sciezka, JSON.stringify(items, null, 2));
    return items;
}

function getStats(instanceId) {
    const items = readItems();
    return {
        liczba: items.length,
        instance: instanceId
    };
}

function validateItem(item) {
    return typeof item === 'string' && item.length > 0;
}

module.exports = {
    readItems,
    addItem,
    getStats,
    validateItem
};