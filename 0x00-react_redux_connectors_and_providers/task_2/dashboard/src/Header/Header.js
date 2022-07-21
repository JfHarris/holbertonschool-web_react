import React from "react";
import holberton_logo from "../assets/holb_logo.jpg";
import { StyleSheet } from "aphrodite";
import { css } from 'aphrodite';
import AppContext from "../App/AppContext";
import PropTypes from "prop-types";
import { Component } from 'react';
import { connect } from "react-redux";
import { logout } from "../actions/uiActionCreators";

export class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { user, logOut } = this.props;
    return (
    <div className={css(styles.header)}>
      <img src={holberton_logo} className={css(styles.headerImg)} />
      <h1>School dashboard</h1>
      {user && (
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

Header.defaultProps = {
  user: null,
  logout: () => {},
}

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
}

const mapStateToProps = (state) => {
  return {
    user: state.get("user"),
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
