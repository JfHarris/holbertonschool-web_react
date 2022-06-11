import './Login.css';
import React from 'react';

function Login() {
  return (
    <div className="App-login">
      <p>
        Login to access the full dashboard
      </p>
      <label htmlFor='email'>Email: </label>
      <input type="email" placeholder="Email" id="email" name="email"/>
      <label htmlFor='password'>Password: </label>
      <input type="password" placeholder="password" id="password" name="password"/>
    <button> Ok </button>
    </div>
  );
}

export default Login;
