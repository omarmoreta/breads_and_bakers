const express = require("express");
const breads = express.Router();
const Bread = require("../models/bread");

// GET /breads/new
breads.get("/new", (req, res) => {
  res.render("new");
});

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

// POST /breads
breads.post("/", (req, res) => {
  if (!req.body.image) {
    req.body.image =
      "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
  }
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = "true";
  } else {
    req.body.hasGluten = "false";
  }
  Bread.push(req.body);
  res.redirect("/breads");
});

module.exports = breads;
