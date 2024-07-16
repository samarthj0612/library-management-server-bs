const express = require("express");
const app = express();
const { root, library, userHomepage, branchDetails, studentDetailsPage, renewalDateReminder } = require("../controllers/index");

app.get("/", root);

app.get("/library/:id", library)

app.get("/library/:id/:username", userHomepage)

app.get("/branchDetails/:branchId", branchDetails)

app.get("/studentDetails/:studentId",studentDetailsPage)

app.get("/library/:id/:studentId/notification/renewalDateReminder", renewalDateReminder);

module.exports = app;