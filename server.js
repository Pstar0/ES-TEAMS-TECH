const http = require("http");
const https = require("https");
const url = require("url");

const PORT = process.env.PORT || 3000;

// Function to fetch data from a third-party API
function fetchAPI(apiUrl, res) {
    https.get(apiUrl, (apiRes) => {
        let data = "";

        // Collect data chunks
        apiRes.on("data", (chunk) => {
            data += chunk;
        });

        // Send response once data is received
        apiRes.on("end", () => {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(data);
        });

    }).on("error", (err) => {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Failed to fetch video", details: err.message }));
    });
}

// Create HTTP server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    if (req.method === "GET") {
        if (pathname === "/download/tiktok" && query.url) {
            const apiUrl = `https://api.davidcyriltech.my.id/download/tiktok?url=${encodeURIComponent(query.url)}`;
            fetchAPI(apiUrl, res);
        } 
        else if (pathname === "/download/instagram" && query.url) {
            const apiUrl = `https://your-instagram-api.com/download?url=${encodeURIComponent(query.url)}`;
            fetchAPI(apiUrl, res);
        } 
        else if (pathname === "/download/facebook" && query.url) {
            const apiUrl = `https://your-facebook-api.com/download?url=${encodeURIComponent(query.url)}`;
            fetchAPI(apiUrl, res);
        } 
        else {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "Invalid Route or Missing URL" }));
        }
    } else {
        res.writeHead(405, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Method Not Allowed" }));
    }
});

// Start server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});