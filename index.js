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

// Serve whatsapp-ban.html for the /whatsapp-ban route
app.get('/whatsapp-ban', (req, res) => {
  res.sendFile(__path + '/whatsapp-ban.html');
});

// Serve bots.html for the /bots route
app.get('/bots', (req, res) => {
  res.sendFile(__path + '/bots.html');
});

// Serve index.html for the base route
app.get('/', (req, res) => {
  res.sendFile(__path + '/index.html');
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