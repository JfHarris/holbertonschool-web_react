import uiReducer, { basicState } from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import { LOGIN } from "../actions/uiActionTypes";

/*describe("reducer tests", function () {
  it("verifies the state returned by the uiReducer function equals the initial state when no action is passed", function () {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(basicState);
  });
  it("verifies the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed", function () {
    const state = uiReducer(undefined, { type: "SELECT_COURSE" });
    expect(state).toEqual(basicState);
  });
  it("verifies the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property", function () {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state).toEqual({
      ...basicState,
      isNotificationDrawerVisible: true,
    });
  });
*/
describe("reducer tests", function () {
  it("verifies state returned by uiReducer function equals the initial state when no action is passed", function () {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(basicState);
  });
  it("verifies state returned by uiReducer function equals the initial state when the action SELECT_COURSE is passed", function () {
    const state = uiReducer(undefined, { type: "SELECT_COURSE" });
    expect(state).toEqual(basicState);
  });
  it("verifies state returned by uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property", function () {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state).toEqual({
      ...basicState,
      isNotificationDrawerVisible: true,
    });
  });
  it("verifies state returned by uiReducer function, when the action LOGIN is passed, changes correctly the user property", function () {
    const state = uiReducer(undefined, { type: LOGIN, user: USER });
    expect(state.toJS()).toEqual({
      ...basicState,
      user: USER,
    });
  });
});
