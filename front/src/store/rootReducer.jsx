import { combineReducers } from "redux";

import { taskListReducer } from "./taskList/taskList.reducer";

const rootReducer = combineReducers({
  task: taskListReducer,
});

export default rootReducer;
