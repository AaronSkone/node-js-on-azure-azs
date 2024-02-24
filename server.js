const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the same directory as server.js
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/roll', (req, res) => {
    const diceResult = Math.floor(Math.random() * 6) + 1;
    res.json({ diceResult });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
