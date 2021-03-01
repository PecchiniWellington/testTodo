import * as actionTypes from "./taskList.types";

const initialState = {
  errorMessage: "",
  isCreatedTask: false,
  isFetching: false,
  listTasksToCancel: [],
  showToast: "",
  sTask: {
    date: "",
    description: "",
    status: "",
    title: "",
  },
  successMessage: "",
  tasks: [],
};

export const taskListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_TASKS_ACTION:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.CREATE_TASKS_ACTION_SUCCESS:
      return { ...state, isFetching: false, isCreatedTask: true };
    case actionTypes.CREATE_TASKS_ACTION_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        isCreatedTask: false,
        isFetching: false,
      };
    case actionTypes.FETCH_TASKS_ACTION:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.FETCH_TASKS_ACTION_SUCCESS:
      return { ...state, tasks: action.payload.tasks, isFetching: false };
    case actionTypes.FETCH_TASKS_ACTION_ERROR:
      return { ...state, errorMessage: action.payload, isFetching: false };
    case actionTypes.REMOVE_TASKS_ACTION:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.REMOVE_TASKS_ACTION_SUCCESS:
      return { ...state, isFetching: false };
    case actionTypes.REMOVE_TASKS_ACTION_ERROR:
      return { ...state, errorMessage: action.payload, isFetching: false };

    case actionTypes.UPDATE_TASK_ACTION:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.UPDATE_TASK_ACTION_SUCCESS:
      return { ...state, isFetching: false };
    case actionTypes.UPDATE_TASK_ACTION_ERROR:
      return { ...state, errorMessage: action.payload, isFetching: false };
    case actionTypes.GET_SINGLE_TASK_ACTION:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.GET_SINGLE_TASK_SUCCESS:
      return {
        ...state,
        isFetching: false,
        sTask: {
          date: action.payload.task.date,
          description: action.payload.task.description,
          status: action.payload.task.status,
          title: action.payload.task.title,
        },
      };
    case actionTypes.GET_SINGLE_TASK_ERROR:
      return { ...state, errorMessage: action.payload, isFetching: false };

    case actionTypes.SET_VALUE:
      return {
        ...state,
        sTask: {
          ...state.sTask,
          date: action.payload.date,
          description: action.payload.description,
          status: action.payload.status,
          title: action.payload.title,
        },
      };
    case actionTypes.HIDE_TOAST_ACTION:
      return {
        ...state,
        showToast: "",
      };
    default:
      return state;
  }
};
