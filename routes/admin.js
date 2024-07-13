const express = require("express");
const app = express();
const { admin, notification } = require("../controllers/admin")

app.get("/", admin);

app.post("/notification", notification);


module.exports = app;
