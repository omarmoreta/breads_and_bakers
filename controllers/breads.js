const express = require("express");
const breads = express.Router();
const Bread = require("../models/bread");

// GET /breads
breads.get("/", (req, res) => {
  res.send(Bread);
});

// GET /breads/:arrayIndex
breads.get("/:arrayIndex", (req, res) => {
  res.send(Bread[req.params.arrayIndex]);
});

module.exports = breads;
