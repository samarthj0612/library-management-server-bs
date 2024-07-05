const express = require("express");
const app = express();
const { auth } = require("../controllers/auth")

app.get("/", auth)

module.exports = app;
