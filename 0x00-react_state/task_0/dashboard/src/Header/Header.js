import React from "react";
import holberton_logo from "../assets/holb_logo.jpg";
import { StyleSheet } from "aphrodite";
import { css } from 'aphrodite';

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={holberton_logo} className={css(styles.headerImg)} alt="" />
      <h1>School dashboard</h1>
    </div>
  );
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
});

export default Header;
