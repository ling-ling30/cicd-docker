const { PrismaClient } = require("@prisma/client");
const CustomErrorHandler = require("../error/custom-error");
const prisma = new PrismaClient();

class Task {
  static allTasks = async (req, res) => {
    try {
      let { id } = req.query;
      const queryObject = {};
      if (id) {
        queryObject.id = Number(id);
      }
      const data = await prisma.task.findMany({ where: queryObject });
      // console.log(data.length);
      if (data.length === 0) {
        throw new CustomErrorHandler("data not found", 400);
      }
      res.json({ status: "success", data });
    } catch (error) {
      console.log(error);
    }
  };

  static createTask = async (req, res) => {
    // console.log(req.body);
    const { task } = req.body;
    if (!task) {
      throw new CustomErrorHandler("pls provide a task", 400);
    }
    const data = await prisma.task.create({ data: { task } });
    res.status(201).json({ msg: "Task is created", data });
  };
  static updateTask = async (req, res) => {
    const { task, complete } = req.body;
    let { id } = req.query;
    const queryObject = {};
    const updateObject = {};
    if (id) {
      queryObject.id = Number(id);
    } else {
      throw new CustomErrorHandler("pls provide an ID", 400);
    }
    if (task) {
      updateObject.task = task;
    }
    if (complete) {
      updateObject.complete = complete;
    }
    if (updateObject.length === 0) {
      throw new CustomErrorHandler("please provide an update", 400);
    }
    const data = await prisma.task.update({
      where: queryObject,
      data: updateObject,
    });
    if (!data) {
      throw new CustomErrorHandler(`there is no task with ID: ${id}`, 404);
    }
    res.status(201).json({ msg: "task is updated", data });
  };
  static removeTask = async (req, res) => {
    let { id } = req.query;
    const queryObject = {};
    if (id) {
      queryObject.id = Number(id);
    } else {
      throw new CustomErrorHandler("pls provide an ID", 400);
    }
    const data = await prisma.task.delete({ where: queryObject });
    res.json({ msg: "task deleted successfully", data });
  };
}

module.exports = Task;
