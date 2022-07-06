import Header from "./Header";
import { shallow } from "enzyme";
import React from "react";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext from "../App/AppContext";
import { user, logOut } from "../App/AppContext";
import { mount } from "enzyme";

describe("<Header />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it("Header renders without crashing", () => {
    const wrapper = mount(
      <AppContext.Provider value ={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.exists()).toEqual(true);
  });
  it("Verify that the components render img", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.update();
    expect(wrapper.find("div img")).toHaveLength(1);
  });
  it("Verify that the components render h1", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.update();
    expect(wrapper.find("div h1")).toHaveLength(1);
  });
});
