module.exports = (req, res, next) => {
    const userAgent = req.headers["user-agent"] || "";
    const referer = req.headers.referer || "";
    const origin = req.headers.origin || "";

    // Allow requests from your Median app link
    const allowedAppLinks = ["https://median.co/share/kjxane"];
    if (allowedAppLinks.includes(referer) || allowedAppLinks.includes(origin)) {
        return next(); // Allow requests from your app
    }

    // Block requests from common scraping tools
    const blockedAgents = ["python", "curl", "wget", "scrapy", "postman", "httpie", "requests"];
    if (blockedAgents.some((agent) => userAgent.toLowerCase().includes(agent))) {
        return res.status(403).send("Access Denied: Scraping Not Allowed");
    }

    // Block if referrer is empty (scrapers usually don’t send referrer info)
    if (!referer && !origin) {
        return res.status(403).send("Error: This Web/App Version is cloned from ES TEAMS MOBILE.\nThe scraper is a fool amd a scammer\nKindly leave this site immediately");
    }

    // Limit access to backend files (only allow 'readme.html')
    if (req.url !== "/readme.html") {
        return res.status(403).send("Error: Unauthorized Access");
    }

    next(); // Allow request if no scraping is detected
};