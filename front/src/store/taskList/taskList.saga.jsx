import {
  put,
  call,
  takeEvery,
  all,
  takeLatest,
  take,
} from "redux-saga/effects";
import * as actions from "./taskList.actions";
import * as taskActionTypes from "./taskList.types";
import * as service from "./taskList.service";

export function* createTasksAsync(value) {
  try {
    const tasks = yield call(service.createTask, value.payload);
    yield put(actions.createTaskActionSuccess(tasks));
  } catch (error) {
    yield put(actions.createTaskActionError(error.message));
  }
}

export function* onCreateTaskStart() {
  yield takeEvery(taskActionTypes.CREATE_TASKS_ACTION, createTasksAsync);
}

export function* getAllTasksAsync(page) {
  try {
    const tasks = yield call(service.getAllTasks, page);

    yield put(actions.fetchTaskActionSuccess(tasks));
  } catch (error) {
    yield put(actions.fetchTaskActionError(error.message));
  }
}

export function* onGetAllTaskStart() {
  yield takeEvery(taskActionTypes.FETCH_TASKS_ACTION, getAllTasksAsync);
}

export function* removeTasksAsync(action) {
  try {
    const tasks = yield call(service.removeTask, action.payload);
    yield put(actions.removeTaskActionSuccess(tasks));
    yield put(actions.fetchTaskStart());
  } catch (error) {
    yield put(actions.removeTaskActionError(error.message));
  }
}

export function* onRemoveTaskStart() {
  yield takeEvery(taskActionTypes.REMOVE_TASKS_ACTION, removeTasksAsync);
}

export function* updateTasksAsync(action) {
  try {
    const tasks = yield call(service.updateTask, action.payload);
    yield put(actions.updateTaskActionSuccess(tasks));
    yield put(actions.fetchTaskStart());
  } catch (error) {
    yield put(actions.updateTaskActionError(error.message));
  }
}

export function* onUpdateTaskStart() {
  yield takeEvery(taskActionTypes.UPDATE_TASK_ACTION, updateTasksAsync);
}

export function* getTasksAsync(action) {
  try {
    const tasks = yield call(service.getTask, action.payload);
    yield put(actions.getSingleTaskActionSuccess(tasks));
  } catch (error) {
    yield put(actions.getSingleTaskActionError(error.message));
  }
}

export function* onGetSingleTaskStart() {
  yield takeLatest(taskActionTypes.GET_SINGLE_TASK_ACTION, getTasksAsync);
}

export function* taskListWatcher() {
  yield all([
    call(onCreateTaskStart),
    call(onGetAllTaskStart),
    call(onRemoveTaskStart),
    call(onUpdateTaskStart),
    call(onGetSingleTaskStart),
  ]);
}
