// Require rails
const RailsApp = require('http-rails');

// Setup rails
const app = new RailsApp();
const port = 3000;

// Send a site at root
app.get('/', (req, res) => { 

    // Send site to user
    res.send('Hello, HTTP Rails!');

    // Log to console
    console.log("Site has been visited!");
});

// Start the app
app.listen(port, () => {
    console.log('HTTP Rails app listening on port 3000');
});