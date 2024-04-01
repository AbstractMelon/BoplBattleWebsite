const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for logging requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Serve static files
app.use(express.static(path.join(__dirname, '../client')));

// Wildcard route for Discord
app.get('/discord*', (req, res) => {
    res.redirect('https://discord.com');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});