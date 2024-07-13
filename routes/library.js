const express = require("express");
const app = express();
const {  addLibrary, deleteLibrary } = require("../controllers/library")

// app.get("/", librarrry)

app.post("/add", addLibrary);

app.delete("/delete/:id", deleteLibrary);



module.exports = app;
