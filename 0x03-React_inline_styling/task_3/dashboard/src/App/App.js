import React from 'react';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import { Component } from 'react';
import { Fragment } from 'react';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { css } from 'aphrodite';
import { StyleSheet } from "aphrodite";

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

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyCombination = this.handleKeyCombination.bind(this);
  }

  handleKeyCombination(e) {
    if (e.key === "h" && e.ctrlKey) {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyCombination);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyCombination);
  }

  render() {
    const { isLoggedIn, logOut } = this.props;
    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className={css(styles.app)}>
          <Header />
        </div>
        <div className={css(styles.body)}>
          {!isLoggedIn ? (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          )}
        </div>
        <BodySection title="News from the School">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </BodySection>
        <div className={css(styles.footer)}>
          <Footer />
        </div>
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const styles = StyleSheet.create({
  app: {
    borderBottom: `3px solid red`,
  },

  body: {
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
  },

  footer: {
    borderTop: '3px solid red',
    fontStyle: 'italic',
    fontSize: '10',
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    [screenSize.small]: {
      position: "static",
    },
  },
});

export default App;
