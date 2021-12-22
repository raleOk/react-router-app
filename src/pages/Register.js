import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerData, setRegisterData] = useState({});

  const registerDataHandler = event => {
    setRegisterData(prevState => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const onSubmit = () => {
    console.log(registerData);
  };
  return (
    <div>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={registerDataHandler}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={registerDataHandler}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={registerDataHandler}
        />
        <button type="button" onClick={onSubmit}>
          Register
        </button>
      </form>
      <Link to="/">Already have an account? Login!</Link>
    </div>
  );
};

export default Register;
