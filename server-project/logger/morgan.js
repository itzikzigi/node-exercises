const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"));

module.exports = app;
