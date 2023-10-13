const express = require("express");
const breads = express.Router();
const Bread = require("../models/bread");

// GET /breads
breads.get("/", (req, res) => {
  res.status(200).render("index", {
    breads: Bread,
    title: "Index Page",
  });
});

// GET /breads/:arrayIndex
breads.get("/:arrayIndex", (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.status(200).render("show", {
      bread: Bread[req.params.arrayIndex],
    });
  } else {
    res.status(404).render("404");
  }
});

module.exports = breads;
