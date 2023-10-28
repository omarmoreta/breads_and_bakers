const express = require("express");
const breads = express.Router();
const Bread = require("../models/bread");

// GET /breads/new
breads.get("/new", (req, res) => {
  res.render("new").status(200);
});

// GET /breads
breads.get("/", (req, res) => {
  res.render("index", {
      breads: Bread,
      title: "Index Page",
    })
});

// GET /breads/:index
breads.get("/:index", (req, res) => {
  const index = req.params.index;
  if (Bread[index]) {
    res.render("show", {
        bread: Bread[index],
        index: index,
      })
  } 
  else { res.render("404").status(404); }
});

// POST /breads
breads.post("/", (req, res) => {
  const { image, hasGluten } = req.body;
  if (!image) { image = "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"; }
  if (hasGluten === "on") { hasGluten = "true";} 
  else { hasGluten = "false"; }
  Bread.push(req.body);
  res.redirect("/breads");
});

// DELETE /breads/:index
breads.delete("/:index", (req, res) => {
  Bread.splice(req.params.index, 1);
  res.redirect("/breads").status(200);
});

module.exports = breads;
