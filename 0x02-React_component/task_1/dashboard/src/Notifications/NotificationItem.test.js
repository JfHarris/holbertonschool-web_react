import { shallow } from "enzyme";
import React from "react";
import NotificationItem from "./NotificationItem";

describe("<Notifications />", () => {
    it("Verify that the basic rendering of the component works without crashing", () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists());
    });
    it("Verify that by passing dummy type and value props, it renders the correct html (for example: type=“default” and value=“test”)", () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        wrapper.update();
        const listItem = wrapper.find("li");

        expect(listItem).toHaveLength(1);
        expect(listItem.text()).toEqual("test");
        expect(listItem.prop("data-notification-type")).toEqual("default");
    });
});
