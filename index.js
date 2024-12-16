/* Updated Repository */

const express = require('express');
const app = express();
__path = process.cwd();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;

// Import necessary files
const tele = require('./telegram'); // Import tele.js for /tele logic
const whatsapp = require('./whatsapp'); // Import whatsapp.js for /whatsapp logic
const whatsapp-ban = require('./whatsapp-ban'); // Import tele.js for /tele logic

require('events').EventEmitter.defaultMaxListeners = 500;

// Define routes
app.use('/whatsapp', whatsapp); // Use whatsapp.js logic for /whatsapp route
app.use('/telegram', tele); // Use tele.js logic for /tele route
app.use('/whatsapp-ban', whatsapp-ban); // Use tele.js logic for /tele route

// Handle the base route (serving index.html)
app.use('/', async (req, res, next) => {
  res.sendFile(__path + '/index.html');
});

// Parse body data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Start the server
app.listen(PORT, () => {
  console.log(`Don't Forget to Give Star 🌟

  Server running on http://localhost:${PORT}`);
});

module.exports = app;