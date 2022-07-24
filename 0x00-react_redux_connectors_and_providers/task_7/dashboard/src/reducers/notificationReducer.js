import { Map } from "immutable";
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ,
  SET_TYPE_FILTER, SET_LOADING_STATE } from "../actions/notificationActionTypes";
  import { fromJS } from "immutable";

export const defaultNotificationState = {
  notifications: {},
  filter: "DEFAULT",
  loading: false,
};

import notificationsNormalizer from "../schema/notifications";

const notificationReducer = (state = Map(defaultNotificationState), action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedInfo = notificationsNormalizer(action.data);
      Object.keys(normalizedInfo.notifications).map((key) => {
        normalizedInfo.notifications[key].isRead = false;
      });
      return state.mergeDeep(fromJS(normalizedInfo));
    case MARK_AS_READ:
        return state.setIn(
          ["messages", String(action.index), "isRead"], true);
    case SET_TYPE_FILTER:
        return state.set("filter", action.filter);
    case SET_LOADING_STATE:
      return state.set("loading", action.loading);
    default:
      break;
  }

  return state;
};

export default notificationReducer;
