const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: String,
  description: String,
  //   status: Boolean,
});

const Task = mongoose.model("task", taskSchema);
module.exports = Task;
