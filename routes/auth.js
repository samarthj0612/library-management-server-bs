const express = require("express");
const app = express();
const { authRoute, loginHandler, registerHandler } = require("../controllers/auth")

app.get("/", authRoute)

app.post("/login", loginHandler);

app.post("/register", registerHandler);


module.exports = app;
