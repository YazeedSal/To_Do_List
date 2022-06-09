const express = require("express");
const { deleteOne } = require("../models/task.model");
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

// router.put("/editTask", async function (req,res) {
//     const {_id} = req.body
//    const task = await Task.findById((task) => body._id ==_id )
//    task.status = body.status
//    res.send(`the object with the id of ${body.id} is changed`)
// })


router.delete("/deleteTask",async function (req,res) {
 const {_id} = req.body
 await Task.deleteOne({_id})
 res.send(`the task has been deleted`)
})
module.exports = router;
