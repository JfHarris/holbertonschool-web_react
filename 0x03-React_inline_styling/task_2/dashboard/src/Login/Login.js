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

const styles = StyleSheet.create({
  login: {
    margin: '50px',
  },

  loginInput: {
    marginRight: '25px',
    marginLeft: '10px',
  },
});

export default Login;
