import React from "react";
import holberton_logo from "../assets/holb_logo.jpg";
import { StyleSheet } from "aphrodite";
import { css } from 'aphrodite';
import AppContext from "../App/AppContext";
import { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { user, logOut } = this.context;
    return (
      <div className={css(styles.header)}>
        <img src={holberton_logo} className={css(styles.headerImg)} />
        <h1>School dashboard</h1>
        { user.isLoggedin && (
          <p id="logOutSection" className={css(styles.logoutSection)}>
            Welcome <b>{`${user.email} `}</b>
            <span onClick={logOut} className={css(styles.logoutSectionSpan)}>
              (logout)
            </span> 
          </p>
        )}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    color: "red",
    fontSize: "20px",
  },

  headerImg: {
    width: "200px",
  },

  logoutSection: {
    color: "black",
    right: 0,
    paddingRight: "20px",
    alignSelf: "flex-end",
    position: "absolute",
  },

  logoutSectionSpan: {
    fontStyle: "italic",
    cursor: "pointer",
  },
});

Header.contextType = AppContext;

export default Header;
