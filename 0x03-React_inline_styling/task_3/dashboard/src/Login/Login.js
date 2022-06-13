import { StyleSheet } from 'aphrodite';
import { css } from 'aphrodite';
import React from 'react';

function Login() {
  return (
    <div className={css(styles.login)}>
      <p>
        Login to access the full dashboard
      </p>
      <label htmlFor='email'>Email: </label>
      <input type="email" id="email" className={css(styles.loginInput)}/>
      <label htmlFor='password'>Password: </label>
      <input type="password" id="password" className={css(styles.loginInput)}/>
    <button> Ok </button>
    </div>
  );
}

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const styles = StyleSheet.create({
  login: {
    margin: '50px',
    [screenSize.small]: {
      marginTop: "10px",
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
    },
  },

  loginInput: {
    marginRight: '25px',
    marginLeft: '10px',
    [screenSize.small]: {
      display: "block",
      marginLeft: 0,
      marginTop: "10px",
      marginBottom: "10px",
    },
  },
});

export default Login;
