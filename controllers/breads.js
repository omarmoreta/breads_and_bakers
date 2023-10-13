const express = require("express");
const breads = express.Router();

// GET /breads
breads.get("/", (req, res) => {
  res.send("This is the index at /breads");
});

module.exports = breads;
