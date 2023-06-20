const express = require("express");

const generateRandomString = require("../utils/generateRandomString");

const router = express.Router();

const urls = {};

// Endpoint to create a shortened URL
router.post("/shorten", (req, res) => {
  const { url } = req.body;
  const shortUrl = generateRandomString(6); // Generate a random string of length 6
  urls[shortUrl] = url;
  res.json({ shortUrl });
});

// Endpoint to redirect to the original URL
router.get("/:shortUrl", (req, res) => {
  const { shortUrl } = req.params;
  console.log(urls);
  const url = urls[shortUrl];
  if (url) {
    res.redirect(url);
  } else {
    res.status(404).json({ error: "URL not found" });
  }
});

module.exports = router;
