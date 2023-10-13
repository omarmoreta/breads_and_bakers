require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT;
const app = express();
const breadsController = require("./controllers/breads");

// GET /
app.get("/", (req, res) => {
  res.send("Welcome to an Awesome App about BREADS!");
});

// Controller
app.use("/breads", breadsController);

// Listen
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
