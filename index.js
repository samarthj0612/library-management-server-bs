const express = require("express");
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const libraryRouter = require("./routes/library");

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/admin", adminRouter);
app.use("/library", libraryRouter);

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}...`);
})
