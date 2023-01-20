import courseReducer, { defaultCourseState } from "./courseReducer";
import notificationReducer, { defaultNotificationState } from "./notificationReducer";
import uiReducer, { basicUiState } from "./uiReducer";
import { combineReducer } from "redux";

import { Map } from "immutable";

export const basicState = {
  courses: Map(defaultCourseState),
  notifications: Map(defaultNotificationState),
  ui: Map(basicUiState),
};

const rootReducer = {
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
};

export default rootReducer;
