const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

// Charger les données JSON
const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf8'));

app.get('/api/data', (req, res) => {
    res.json(jsonData);
});

app.listen(PORT, () => {
    console.log(`Serveur en ligne sur http://localhost:${PORT}`);
});
