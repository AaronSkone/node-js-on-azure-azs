const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('/Users/aaronskonieczny/Documents/Spring2024/SoftwareEngineering/node-js-on-azure-azs'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Users/aaronskonieczny/Documents/Spring2024/SoftwareEngineering/node-js-on-azure-azs');
});

app.get('/roll', (req, res) => {
    const diceResult = Math.floor(Math.random() * 6) + 1; // Server-side random number generation
    res.json({ diceResult });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
