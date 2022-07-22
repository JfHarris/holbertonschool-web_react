import { MARK_AS_READ, SET_LOADING_STATE, SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters } from "./notificationActionTypes";

import { markAsAread, setLoadingState, setNotificationFilter,
  setNotifications, fetchNotifications } from "./notificationActionCreators";

describe("action creators tests", function () {
  it("returns correct action for markAsRead", function () {
    const expectedResult = {
      type: MARK_AS_READ,
      index: 1,
    };
    const result = markAsAread(1);
    expect(result).toEqual(expectedResult);
  });
  it("returns correct action for setNotificationFilter", function () {
    const expectedResult = {
      type: SET_TYPE_FILTER,
      filter: "DEFAULT",
    };
    const result = setNotificationFilter(NotificationTypeFilters.DEFAULT);
    expect(result).toEqual(expectedResult);
  });
  it("returns correct action for setLoadingState", function () {
    const expectedResult = {
      type: SET_LOADING_STATE,
      loading: true,
    };
    const result = setLoadingState(true);
    expect(result).toEqual(expectedResult);
  });
  it("returns correct action for setNotifications", function () {
    const data = { 1: { a: "Hello" }, 2: { b: "There" } };
    const expectedResult = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data,
    };
    const result = setNotifications(data);
    expect(result).toEqual(expectedResult);
  });
});
