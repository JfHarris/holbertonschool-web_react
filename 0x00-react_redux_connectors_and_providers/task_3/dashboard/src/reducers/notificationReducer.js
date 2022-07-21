import { Map } from "immutable";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";

export const defaultNotificationState = {
  notifications: [],
  filter: "DEFAULT",
};

import notificationsNormalizer from "../schema/notifications";

const notificationReducer = (state = Map(defaultNotificationState), action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedInfo = notificationsNormalizer(action.data);
      Object.keys(normalizedInfo.notifications).map((key) => {
        normalizedInfo.notifications[key].isRead = false;
      });
      return state.merge(normalizedInfo);
    case MARK_AS_READ:
      return state.setIn(
        ["notifications", String(action.index), "isRead"],
        true
      );
    case SET_TYPE_FILTER:
      return state.set("filter", action.filter);
    default:
      break;
  }

  return state;
};

export default notificationReducer;
