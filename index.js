const express = require("express");
const app = express();
const breadsController = require("./controllers/breads");
const createEngine = require("express-react-views").createEngine();

// Middleware
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", createEngine);
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}))


// Controller
app.use("/breads", breadsController);

// GET /
app.get("/", (req, res) => {
  res.send("Welcome to an Awesome App about BREADS!");
});

// 404 Page
app.get("*", (req, res) => {
  res.status(404).render("404");
});

module.exports = app;
