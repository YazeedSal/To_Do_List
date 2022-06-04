const express = require("express");
const Task = require("../models/task.model");
const router = express.Router();

router.post("/addTask", async function (req, res) {
  const task = new Task(req.body);
  const response = await task.save();
  res.send(response);
});

router.get("/getTasks", async function (req, res) {
  const tasks = await Task.find({}); // the {} means to get every thing
  res.send(tasks);
});

// router.put("editTask", async function (req,res) {
//     const {body} = req
//    const task = await Task.find((task) => body.id ==id )
//    task.status = body.status
//    res.send(`the object with the id of ${body.id} is changed`)
// })

module.exports = router;
