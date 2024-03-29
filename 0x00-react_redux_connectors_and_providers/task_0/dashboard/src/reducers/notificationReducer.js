import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";

export const defaultNotificationState = {
  notifications: [],
  filter: "DEFAULT",
};

const notificationReducer = (state = defaultNotificationState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.data.maap((notification) => {
          return {
            ...notification,
            isRead: false,
          };
        }),
      };
    case MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map((notification) => {
          const current = {
            ...notification,
          };
          if (notification.id == action.index) current.isRead = true;
          return current;
        }),
      };
    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      break;
  }

  return state;
};

export default notificationReducer;
