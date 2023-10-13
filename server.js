require("dotenv").config();
const PORT = process.env.PORT || 3000;
const app = require("./index");

// Listen
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
