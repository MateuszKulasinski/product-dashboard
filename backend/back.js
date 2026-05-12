const express = require('express');
const fs = require('fs');
const logic = require('./logic');

const app = express();

const INSTANCE_ID = process.env.INSTANCE_ID;
const PORT = process.env.PORT;
const sciezka = './data/items.json';

app.use(express.text());

if (!fs.existsSync(sciezka)) {
    fs.writeFileSync(sciezka, '[]');
}

app.get('/items', (req, res) => {
    res.json(logic.readItems());
});

app.post('/items', (req, res) => {
    const body = req.body;

    if (!logic.validateItem(body)) {
        return res.status(400).send('Invalid item');
    }

    logic.addItem(body);
    res.type('text').send(`Dodano ${body}`);
});

app.get('/stats', (req, res) => {
    res.json(logic.getStats(INSTANCE_ID));
});

app.use((req, res) => {
    res.status(404).send('Not found');
});

app.listen(PORT, () => {
    console.log("Server działa na porcie ",PORT);
});