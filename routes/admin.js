const express = require("express");
const app = express();
const { admin } = require("../controllers/admin")

app.get("/", admin)

module.exports = app;
