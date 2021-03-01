const express = require("express");
const router = express.Router();

const taskController = require("../controllers/task");

router.get("/tasks", taskController.getAllTasks);
router.post("/task/create", taskController.createTask);
router.delete("/task/:taskId", taskController.removeTask);
router.patch("/task/:taskId", taskController.updateTask);
router.get("/task/:taskId", taskController.getTask);

module.exports = router;
