import { combineReducers } from "redux";

import { taskListReducer } from "./taskList/taskList.reducer";
import { authUserReducer } from "./authUser/auth.reducer";
import { commonReducer } from "./common/common.reducer";

const rootReducer = combineReducers({
  common: commonReducer,
  task: taskListReducer,
  auth: authUserReducer,
});

export default rootReducer;
