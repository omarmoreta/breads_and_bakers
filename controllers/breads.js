const express = require("express");
const breads = express.Router();
const Bread = require("../models/bread");

// GET /breads
breads.get("/", (req, res) => {
  res.status(200).render("index", {
    breads: Bread,
    title: "Index Page",
  })
});

// GET /breads/:arrayIndex
breads.get("/:arrayIndex", (req, res) => {
  res.status(200).send(Bread[req.params.arrayIndex]);
});

module.exports = breads;
