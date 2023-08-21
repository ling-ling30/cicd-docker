require("express-async-errors");
require("dotenv").config();

const express = require("express");
const app = express();
const router = require("./routes");
const errorHandler = require("./middleware/error-handler");
app.use(express.json());
app.use(router);
app.use(errorHandler);

module.exports = app;
