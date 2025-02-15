module.exports = (req, res, next) => {
    const userAgent = req.headers["user-agent"] || "";
    const referer = req.headers.referer || "";
    const origin = req.headers.origin || "";

    // Allow requests from your Median app link and your Render site
    const allowedAppLinks = ["https://median.co/share/kjxane", "https://es-teams-database2025.onrender.com"];
    if (allowedAppLinks.includes(referer) || allowedAppLinks.includes(origin)) {
        return next(); // Allow request and continue to index.js
    }

    // Block requests from common scraping tools
    const blockedAgents = ["python", "curl", "wget", "scrapy", "postman", "httpie", "requests"];
    if (blockedAgents.some((agent) => userAgent.toLowerCase().includes(agent))) {
        return res.status(403).send("Access Denied: Scraping Not Allowed");
    }

    // Block if referrer is empty (scrapers usually don’t send referrer info)
    if (!referer && !origin) {
        return res.status(403).send("Error: This Web/App Version is cloned from ES TEAMS MOBILE.\nThe scraper is a fool and a scammer\nKindly leave this site immediately");
    }

    // Allow all frontend files but block backend file access
    const allowedFrontendFiles = ["/", "/index", "/tools", "/activity", "/ai", "/bots", "/games", "/premium", "/profile", "/about"];
    if (!allowedFrontendFiles.includes(req.url)) {
        return res.status(403).send("Error: Unauthorized Access");
    }

    next(); // If nothing is blocked, continue processing in index.js
};