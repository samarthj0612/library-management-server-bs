const express = require("express");
const app = express();
const { library } = require("../controllers/library")

app.get("/", library)

module.exports = app;
