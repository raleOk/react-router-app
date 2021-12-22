import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const loginDataHandler = event => {
    setLoginData(prevState => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };
  const onSubmit = () => {
    console.log(loginData);
  };
  return (
    <div>
      <form>
        <label htmlFor="mail">E-mail:</label>
        <input
          type="email"
          id="mail"
          name="email"
          onChange={loginDataHandler}
        />
        <label htmlFor="ps">Password:</label>
        <input
          type="password"
          id="ps"
          name="password"
          onChange={loginDataHandler}
        />
        <button type="button" onClick={onSubmit}>
          Login
        </button>
      </form>
      <Link to="/register">Don't have an account? Register here!</Link>
    </div>
  );
};

export default Login;
