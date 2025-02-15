const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;

require('events').EventEmitter.defaultMaxListeners = 500;

// Set the base path for the project
__path = process.cwd();

// Import anti-scraping middleware
const esteams = require('./esteams'); 

// Use anti-scraping middleware
app.use(esteams); 

// Middleware to serve static files (HTML, CSS, JS, etc.)
app.use(express.static(__path));  // Serve static files from the root directory

// Define routes for imported modules
const tele = require('./telegram'); 
const whatsapp = require('./whatsapp'); 
const youtube = require('./youtube'); 

app.use('/telegram', tele); 
app.use('/whatsapp', whatsapp); 
app.use('/youtube', youtube); 

// Serve tools.html for the /tools route
app.get('/tools', (req, res) => {
  res.sendFile(__path + '/tools.html');
});

// Serve activity.html for the /bots route
app.get('/activity', (req, res) => {
  res.sendFile(__path + '/activity.html');
});

// Serve ai.html for the /tools route
app.get('/ai', (req, res) => {
  res.sendFile(__path + '/ai.html');
});

// Serve bots.html for the /bots route
app.get('/bots', (req, res) => {
  res.sendFile(__path + '/bots.html');
});

// Serve games.html for the /bots route
app.get('/games', (req, res) => {
  res.sendFile(__path + '/games.html');
});

// Serve index.html for the base route
app.get('/index', (req, res) => {
  res.sendFile(__path + '/index.html'); // Main home page
});

// Serve premium.html for the /premium route
app.get('/premium', (req, res) => {
  res.sendFile(__path + '/premium.html'); // Premium page
});

// Serve profile.html for the /profile route
app.get('/profile', (req, res) => {
  res.sendFile(__path + '/profile.html'); // Premium page
});

// Serve about.html for the /bots route
app.get('/about', (req, res) => {
  res.sendFile(__path + '/about.html');
});

// Middleware to parse incoming body data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Start the server
app.listen(PORT, () => {
  console.log(`
  Don't Forget to Give Star 🌟
  Server running on http://localhost:${PORT}`);
});

module.exports = app;