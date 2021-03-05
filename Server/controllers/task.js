const Task = require("../models/task");

exports.getAllTasks = async (req, res) => {
  try {
    await res.send(res.pagination);
  } catch (error) {
    res.status(400).send({ messageError: error.message });
    console.log(error);
  }
};

exports.getTask = async (req, res) => {
  console.log(req.params);
  try {
    const task = await Task.findById({ _id: req.params.taskId });
    if (!task) {
      throw new Error("task not found");
    }
    res.status(200).send({ task });
  } catch (error) {
    res.status(400).send({ messageError: error.message });
    console.log(error);
  }
};

exports.createTask = async (req, res, next) => {
  console.log("REQ BODY", req.body);
  try {
    const task = new Task({ ...req.body });
    await task.save();
    res.status(201).send({
      ...req.body,
    });
  } catch (error) {
    res.status(400).send({ messageError: error.message });
    console.log(error);
  }
};

exports.removeTask = async (req, res, next) => {
  console.log("BACK", req.params.taskId);
  try {
    const taskId = await Task.findById({ _id: req.params.taskId });
    await Task.findByIdAndDelete({ _id: req.params.taskId });
    res.status(200).send({ successMessage: `${taskId} deleted successfully` });
  } catch (error) {
    res.status(400).send({ messageError: error.message });
    console.log(error);
  }
};

exports.updateTask = async (req, res, next) => {
  const update = Object.keys(req.body);
  const allowedUpdates = ["title", "description", "status"];
  const isValidOperation = update.every((up) => allowedUpdates.includes(up));
  if (!isValidOperation) {
    throw new Error("Invalid updates");
  }
  try {
    const task = await Task.findOne({ _id: req.params.taskId });
    if (!task) {
      throw new Error("task not found");
    }
    update.forEach((taskKey) => (task[taskKey] = req.body[taskKey]));
    await task.save();
    res.status(200).send({ message: "task modify successfully", task });
  } catch (error) {
    res.status(400).send({ messageError: error.message });
  }
};
