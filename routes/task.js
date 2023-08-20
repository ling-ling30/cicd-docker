const express = require("express");
const Task = require("../controllers/task");
const router = express.Router();

router
  .route("/")
  .get(Task.allTasks)
  .post(Task.createTask)
  .put(Task.updateTask)
  .delete(Task.removeTask);

module.exports = router;
