const express = require("express");
const router = express.Router();
const pagination = require("../middlewares/pagination");

const taskController = require("../controllers/task");
const Task = require("../models/task");

router.get("/tasks", pagination(Task), taskController.getAllTasks);
router.post("/task/create", taskController.createTask);
router.delete("/task/:taskId", taskController.removeTask);
router.patch("/task/:taskId", taskController.updateTask);
router.get("/task/:taskId", taskController.getTask);

module.exports = router;
