const express = require("express");
const app = express();
const { library, addLibrary } = require("../controllers/library")

app.get("/", library)

app.post("/add", addLibrary);

module.exports = app;
