const express = require("express");
const app = express();
const { auth, loginHandler, registerHandler } = require("../controllers/auth")

app.get("/", auth)

app.post("/login", loginHandler);

app.post("/register", registerHandler);

module.exports = app;
