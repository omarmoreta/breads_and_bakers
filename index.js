const express = require("express");
const app = express();
const breadsController = require("./controllers/breads");

// GET /
app.get("/", (req, res) => {
  res.send("Welcome to an Awesome App about BREADS!");
});

// Controller
app.use("/breads", breadsController);

module.exports = app;
