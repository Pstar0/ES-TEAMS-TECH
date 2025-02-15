const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;

require('events').EventEmitter.defaultMaxListeners = 500;

// Set the base path for the project
__path = process.cwd();

// Import the security middleware
const securityMiddleware = require('./esteams');
app.use(securityMiddleware);  // Apply security check before processing any request

// Middleware to serve static files (HTML, CSS, JS, etc.)
app.use(express.static(__path));  

// Define routes for imported modules
const tele = require('./telegram'); 
const whatsapp = require('./whatsapp'); 
const youtube = require('./youtube'); 

app.use('/telegram', tele); 
app.use('/whatsapp', whatsapp); 
app.use('/youtube', youtube); 

// Serve HTML pages
app.get('/tools', (req, res) => res.sendFile(__path + '/tools.html'));
app.get('/activity', (req, res) => res.sendFile(__path + '/activity.html'));
app.get('/ai', (req, res) => res.sendFile(__path + '/ai.html'));
app.get('/bots', (req, res) => res.sendFile(__path + '/bots.html'));
app.get('/games', (req, res) => res.sendFile(__path + '/games.html'));
app.get('/index', (req, res) => res.sendFile(__path + '/index.html')); 
app.get('/premium', (req, res) => res.sendFile(__path + '/premium.html')); 
app.get('/profile', (req, res) => res.sendFile(__path + '/profile.html')); 
app.get('/about', (req, res) => res.sendFile(__path + '/about.html'));

// Middleware to parse incoming body data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;