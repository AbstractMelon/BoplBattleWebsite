const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.static('..'));
app.use(express.urlencoded({ extended: true }));

app.post('/upload', (req, res) => {
    const file = req.files.file;
    const hexData = fs.readFileSync(file.path).toString('hex');
    res.send(hexData);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
