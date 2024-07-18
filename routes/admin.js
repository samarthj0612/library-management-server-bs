const express = require("express");
const app = express();
const { admin, notification, adminStudentRegistration, addNotice, newBookAdded, lostBooks, borrowedBooks, availableBooks, branchDetails } = require("../controllers/admin")

app.get("/", admin);

app.post("/notification", notification);

app.get("/adminStudentRegistration", adminStudentRegistration);

app.post("/addNotice", addNotice);

app.get("/Books/newBooksAdded", newBookAdded);

app.get("/Books/lostBooks", lostBooks);

app.get("/Books/borrowedBooks", borrowedBooks);

app.get("/Books/availableBooks", availableBooks);

app.get("/branchDetails", branchDetails);

module.exports = app;
