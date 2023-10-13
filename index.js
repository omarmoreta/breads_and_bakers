const express = require("express");
const app = express();
const breadsController = require("./controllers/breads");
const createEngine = require("express-react-views").createEngine();

// Middleware
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", createEngine);

// GET /
app.get("/", (req, res) => {
  res.send("Welcome to an Awesome App about BREADS!");
});

// Controller
app.use("/breads", breadsController);

module.exports = app;
