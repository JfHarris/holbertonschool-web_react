import React from "react";
import Login from './Login';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from "aphrodite";

describe('<Login />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists());
  });
  it('renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).to.have.lengthOf(2);
    expect(wrapper.find('label')).to.have.lengthOf(2);
  });
});
