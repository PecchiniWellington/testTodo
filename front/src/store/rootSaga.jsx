import { all } from "redux-saga/effects";
import { taskListWatcher } from "./taskList/taskList.saga";

export default function* rootSaga() {
  yield all([taskListWatcher()]);
}
