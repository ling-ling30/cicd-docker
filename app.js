require("express-async-errors");
require("dotenv").config();

const express = require("express");
const app = express();
const router = require("./routes");
const errorHandler = require("./middleware/error-handler");
app.use(express.json());
app.use(router);
app.use(errorHandler);
port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.log(`app is listening on port ${port}`);
});

module.exports = app;
