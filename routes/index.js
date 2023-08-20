const express = require("express");
const router = express.Router();
const TaskRouter = require("./task.js");

router.use("/api/tasks", TaskRouter);

module.exports = router;
