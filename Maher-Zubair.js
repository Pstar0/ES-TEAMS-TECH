const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;

// Set the base path for the project
__path = process.cwd();

require('events').EventEmitter.defaultMaxListeners = 500;

// Middleware to serve static files (HTML, CSS, JS, etc.)
app.use(express.static(__path));  // Serve all static files in the base directory

// Import necessary files for dynamic routes
const tele = require('./telegram'); // Import tele.js for /telegram logic
const whatsapp = require('./whatsapp'); // Import whatsapp.js for /whatsapp logic

// Define dynamic routes
app.use('/telegram', tele); 
app.use('/whatsapp', whatsapp); 

// Serve the `whatsapp-ban.html` file for /whatsapp-ban route
app.get('/whatsapp-ban', (req, res) => {
  res.sendFile(__path + '/whatsapp-ban.html'); 
});

// Serve bots.html for the /bots route
app.get('/bots', (req, res) => {
  res.sendFile(__path + '/bots.html');  // Ensure it uses its own CSS (linked in bots.html)
});

// Serve premium.html for the /premium route
app.get('/premium', (req, res) => {
  console.log('Serving premium.html from:', __path + '/premium.html');
  res.sendFile(__path + '/premium.html');  // Ensure the path is correct
});

// Serve profile.html for the /profile route
app.get('/profile', (req, res) => {
  res.sendFile(__path + '/profile.html');  // Ensure it uses its own CSS (linked in bots.html)
});

// Handle the base route (serving index.html)
app.get('/', (req, res) => {
  res.sendFile(__path + '/index.html'); // Serve index.html with its own CSS
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