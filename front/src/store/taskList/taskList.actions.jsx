import * as taskListActionTypes from "./taskList.types";

export const createTaskStart = (value) => ({
  type: taskListActionTypes.CREATE_TASKS_ACTION,
  payload: value,
});
export const createTaskActionSuccess = (task) => ({
  type: taskListActionTypes.CREATE_TASKS_ACTION_SUCCESS,
  payload: task,
});
export const createTaskActionError = (error) => ({
  type: taskListActionTypes.CREATE_TASKS_ACTION_ERROR,
  payload: error,
});

export const fetchTaskStart = () => ({
  type: taskListActionTypes.FETCH_TASKS_ACTION,
});
export const fetchTaskActionSuccess = (task) => ({
  type: taskListActionTypes.FETCH_TASKS_ACTION_SUCCESS,
  payload: task,
});
export const fetchTaskActionError = (error) => ({
  type: taskListActionTypes.FETCH_TASKS_ACTION_ERROR,
  payload: error,
});

export const getSingleTaskStart = (id) => ({
  type: taskListActionTypes.GET_SINGLE_TASK_ACTION,
  payload: id,
});
export const getSingleTaskActionSuccess = (task) => ({
  type: taskListActionTypes.GET_SINGLE_TASK_SUCCESS,
  payload: task,
});
export const getSingleTaskActionError = (error) => ({
  type: taskListActionTypes.GET_SINGLE_TASK_ERROR,
  payload: error,
});

export const removeTaskStart = (id) => ({
  type: taskListActionTypes.REMOVE_TASKS_ACTION,
  payload: id,
});
export const removeTaskActionSuccess = (task) => ({
  type: taskListActionTypes.REMOVE_TASKS_ACTION_SUCCESS,
  payload: task,
});
export const removeTaskActionError = (error) => ({
  type: taskListActionTypes.REMOVE_TASKS_ACTION_ERROR,
  payload: error,
});

export const updateTaskStart = (task) => ({
  type: taskListActionTypes.UPDATE_TASK_ACTION,
  payload: task,
});
export const updateTaskActionSuccess = (task) => ({
  type: taskListActionTypes.UPDATE_TASK_ACTION_SUCCESS,
  payload: task,
});
export const updateTaskActionError = (error) => ({
  type: taskListActionTypes.UPDATE_TASK_ACTION_ERROR,
  payload: error,
});

export const setValueAction = (val) => ({
  type: taskListActionTypes.SET_VALUE,
  payload: val,
});

export const hideToastAction = (hide) => ({
  type: taskListActionTypes.HIDE_TOAST_ACTION,
  payload: hide,
});
