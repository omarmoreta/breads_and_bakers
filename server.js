require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT;
const app = express();

// GET /
app.get("/", (req, res) => {
  res.send("Welcome to an Awesome App about BREADS!");
});

// Listen
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
