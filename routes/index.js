const express = require("express");
const app = express();
const { root } = require("../controllers/index");

app.get("/", root);

module.exports = app;
