import react from 'react';
import App from './App';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from "../Login/Login";
import Notifications from '../Notifications/Notifications';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists());
  });
  it('renders a Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).to.have.lengthOf(1);
  });
  it('renders a Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).to.have.lengthOf(1);
  });
  it('renders a Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).to.have.lengthOf(1);
  });
  it('renders a Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).to.have.lengthOf(1);
  });
});
