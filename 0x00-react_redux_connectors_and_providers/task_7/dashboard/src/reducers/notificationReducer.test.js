import notificationReducer from "./notificationReducer"
import { initialNotificationState } from "./notificationReducer";
import { Map } from "immutable";
import { fromJS } from "immutable";
import notificationsNormalizer from "../schema/notifications";

import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER, SET_LOADING_STATE,
} from "../actions/notificationActionTypes";

describe("notificationReducer tests", function () {
  it("Tests that the default state returns an initial state", function () {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(initialNotificationState);
  });
  it("Tests that FETCH_NOTIFICATIONS_SUCCESS returns the data passed", function () {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          type: "urgent",
          value: "New data available",
        },
      ],
    };
    const expectedData = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };
    const state = notificationReducer(undefined, action);
    expect(state).toEqual(expectedData);
  });
  it("Tests that MARK_AS_READ returns the data with the right item updated", function () {
    const initialState = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };
    const action = {
      type: MARK_AS_READ,
      index: 2,
    };
    const expectedData = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: true,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };
    const state = notificationReducer(basicState, action);
    expect(state).toEqual(expectedData);
  });
  it("Tests that SET_TYPE_FILTER returns the data with the right item updated", function () {
    const basicState = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };
    const action = {
      type: SET_TYPE_FILTER,
      filter: "URGENT",
    };
    const expectedData = {
      filter: "URGENT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };
    const state = notificationReducer(basicState, action);
    expect(state).toEqual(expectedData);
  });
  it("Tests that SET_LOADING_STATE returns the data with the right item updated", function () {
    const basicState = {
      filter: "DEFAULT",
      loading: false,
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };
    basicState.notifications = notificationsNormalizer(
      basicState.notifications
    ).notifications;
    const action = {
      type: SET_LOADING_STATE,
      loading: true,
    };
    const data = [
      {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available",
      },
      {
        id: 2,
        type: "urgent",
        isRead: false,
        value: "New resume available",
      },
      {
        id: 3,
        type: "urgent",
        isRead: false,
        value: "New data available",
      },
    ];
    const normalizedData = notificationsNormalizer(data);
    const expectedData = {
      filter: "DEFAULT",
      loading: true,
      ...normalizedData,
    };
    const state = notificationReducer(fromJS(basicState), action);
    expect(state.toJS()).toEqual(expectedData);
  });
});
