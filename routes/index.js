const express = require("express");
const app = express();
const { root, library, userHomepage, branchDetails, studentDetailsPage } = require("../controllers/index");

app.get("/", root);

app.get("/library/:id", library)

app.get("/library/:id/:username", userHomepage)

app.get("/branchDetails/:branchId", branchDetails)

app.get("/studentDetails/:studentId",studentDetailsPage)


module.exports = app;
