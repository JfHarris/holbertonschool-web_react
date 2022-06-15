import logo from '../assets/holb_logo.jpg';
import { css, StyleSheet } from 'aphrodite';
import React from 'react';

function Header() {
  return (
      <div className={css(styles.header)}>
        <img src={logo} className={css(styles.headerImg)} />
        <h1 className="App.H1"> School dashboard</h1>
      </div>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    display: "flex",
    color: "#e01d3f",
    fontSize: "20px",
  },

  headerImg: {
    width: "200px",
  },
});

export default Header;
