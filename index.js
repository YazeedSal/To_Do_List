const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connected to database"));

const app = express();
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json());
const PORT = process.env.PORT;
const taskRouter = require("./server/routes/task.api");

app.listen(PORT, function () {
  console.log("up and running on port " + PORT);
});

app.use("/task", taskRouter);
