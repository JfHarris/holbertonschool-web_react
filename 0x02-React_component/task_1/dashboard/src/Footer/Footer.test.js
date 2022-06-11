import React from "react";
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Footer from './Footer';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists());
  });
  it('render the text “Copyright”', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("p").text()).to.contain('Copyright');
  });
});
