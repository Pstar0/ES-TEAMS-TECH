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

// Route to redirect to WhatsApp channel
router.get("/", async (req, res) => {
  const whatsappChannelLink = "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";

  // Redirect immediately to WhatsApp channel
  res.redirect(whatsappChannelLink);
});

module.exports = router;