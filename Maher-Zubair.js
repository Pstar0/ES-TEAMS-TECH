/* Updated Repository */

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;

// Set the base path for the project
__path = process.cwd();

require('events').EventEmitter.defaultMaxListeners = 500;

// Middleware to serve static files (HTML, CSS, JS, etc.)
app.use(express.static(__path)); // Serves all files from the current directory

// Import necessary files for dynamic routes
const tele = require('./telegram'); // Import tele.js for /telegram logic
const whatsapp = require('./whatsapp'); // Import whatsapp.js for /whatsapp logic

// Define dynamic routes
app.use('/telegram', tele); // Use tele.js logic for /telegram route
app.use('/whatsapp', whatsapp); // Use whatsapp.js logic for /whatsapp route

// Serve the `whatsapp-ban.html` file for /whatsapp-ban route
app.get('/whatsapp-ban', (req, res) => {
  res.sendFile(__path + '/whatsapp-ban.html'); // Correctly serves the HTML file
});

// Serve bots.html for the /whatsapp-ban route
app.get('/bots', (req, res) => {
  res.sendFile(__path + '/bots.html'); // Serve the HTML file
});

// Handle the base route (serving index.html)
app.get('/', (req, res) => {
  res.sendFile(__path + '/index.html'); // Correctly serves the HTML file
});

// Middleware to parse incoming body data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Start the server
app.listen(PORT, () => {
  console.log(`Don't Forget to Give Star 🌟

  Server running on http://localhost:${PORT}`);
});

module.exports = app;