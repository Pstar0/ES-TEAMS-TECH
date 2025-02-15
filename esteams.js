module.exports = (req, res, next) => {
    const userAgent = req.headers["user-agent"] || "";

    // Block requests from common scraping tools
    const blockedAgents = ["python", "curl", "wget", "scrapy", "postman", "httpie", "requests"];
    if (blockedAgents.some((agent) => userAgent.toLowerCase().includes(agent))) {
        return res.status(403).send("Access Denied: Scraping Not Allowed");
    }

    // Block if referrer is empty (scrapers usually don’t send referrer info)
    if (!req.headers.referer && !req.headers.origin) {
        return res.status(403).send("Error: Suspicious Request Detected");
    }

    // Limit access to backend files (only allow 'readme.html')
    if (req.url !== "/readme.html") {
        return res.status(403).send("Error: Unauthorized Access");
    }

    next(); // Allow request if no scraping is detected
};