import { all } from "redux-saga/effects";
import { taskListWatcher } from "./taskList/taskList.saga";
import { authUserWatcher } from "./authUser/auth.saga";

export default function* rootSaga() {
  yield all([taskListWatcher(), authUserWatcher()]);
}
