const PastebinAPI = require("pastebin-js"),
  pastebin = new PastebinAPI("EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL");
const { makeid } = require("./id");
const QRCode = require("qrcode");
const express = require("express");
const path = require("path");
const fs = require("fs");
let router = express.Router();
const pino = require("pino");
const {
  default: Maher_Zubair,
  useMultiFileAuthState,
  jidNormalizedUser,
  Browsers,
  delay,
  makeInMemoryStore,
} = require("maher-zubair-baileys");

function removeFile(FilePath) {
  if (!fs.existsSync(FilePath)) return false;
  fs.rmSync(FilePath, {
    recursive: true,
    force: true,
  });
}
const { readFile } = require("node:fs/promises");

// Route to redirect to Telegram channel with app fallback
router.get("/", async (req, res) => {
  const appLink = "tg://resolve?domain=esteam24";
  const webLink = "https://t.me/esteam24";

  // Attempt app link, fallback to web link
  res.setHeader("Refresh", `0;url=${appLink}`);
  res.send(`<html>
              <head>
                <title>Redirecting to Telegram...</title>
              </head>
              <body>
                <p>If you are not redirected automatically, <a href="${webLink}">click here to join our Telegram channel</a>.</p>
              </body>
            </html>`);
});

module.exports = router;