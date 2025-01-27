const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;

require('events').EventEmitter.defaultMaxListeners = 500;

// Set the base path for the project
__path = process.cwd();

// Middleware to serve static files (HTML, CSS, JS, etc.)
app.use(express.static(__path));  // Serve static files from the root directory

// Define routes for imported modules
const tele = require('./telegram'); 
const whatsapp = require('./whatsapp'); 

app.use('/telegram', tele); 
app.use('/whatsapp', whatsapp); 

// Serve tools.html for the /whatsapp-ban route
app.get('/tools', (req, res) => {
  res.sendFile(__path + '/whatsapp-ban.html');
});

// Serve bots.html for the /bots route
app.get('/bots', (req, res) => {
  res.sendFile(__path + '/bots.html');
});

// Serve index.html for the base route
app.get('/', (req, res) => {
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