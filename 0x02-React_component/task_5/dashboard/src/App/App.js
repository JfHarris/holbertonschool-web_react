import React from 'react';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";
import "./App.css";
import { getLatestNotification } from "../utils/utils";
import { Component } from 'react';
import { Fragment } from 'react';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
      window.addEventListener("keydown", this.handleLogout);
  }

  componentWillUnmount() {
      window.removeEventListener("keydown", this.handleLogout);
  }

  handleLogout (event) {
      if (event.ctrlKey && event.key === 'h') {
          event.preventDefault();
          alert("Logging you out");
          this.props.logOut();
      }
    }

  render() {
    const { isLoggedIn } = this.props;

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

return (
  <Fragment>
    <Notifications listNotifications={listNotifications} />
    <div className='App'>
      <Header />
    </div>
    <div className='App-body'>
      {!isLoggedIn && (
      <BodySectionWithMarginBottom title='Log in to continue'>
        <Login />
        </BodySectionWithMarginBottom>
        )}
        {isLoggedIn && (
        <BodySectionWithMarginBottom title='Course List'>
          <CourseList listCourses={listCourses} />
          </BodySectionWithMarginBottom>
          )}
    </div>
    <BodySection title='News from the School'>
      <p>RAnDom TexT</p>
    </BodySection>
    <div className='App-footer'>
      <Footer />
      </div>
      </Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
