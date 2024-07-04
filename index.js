const express = require("express");
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const indexRouter = require("./routes/index");

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}...`);
})
