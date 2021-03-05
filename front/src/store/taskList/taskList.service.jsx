import axios from "axios";

export const createTask = async (value) => {
  return await axios
    .post("http://localhost:3500/api/task/create", value)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getAllTasks = async (action) => {
  return await axios
    .get(`http://localhost:3500/api/tasks?page=${action.payload}&limit=2`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const removeTask = async (taskId) => {
  return await axios
    .delete(`http://localhost:3500/api/task/${taskId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const updateTask = async (task) => {
  return await axios
    .patch(`http://localhost:3500/api/task/${task.id}`, task.request)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getTask = async (id) => {
  return await axios
    .get(`http://localhost:3500/api/task/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
