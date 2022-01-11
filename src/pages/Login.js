import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Box, Container, TextField, Button, Typography } from "@mui/material";
import { authContext } from "../auth/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const { login } = useContext(authContext);

  const loginDataHandler = event => {
    setLoginData(prevState => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const onSubmit = () => {
    localStorage.setItem("user", JSON.stringify(loginData));
    localStorage.setItem("isLogged", "true");
    login();
  };

  return (
    <Box
      component="form"
      noValidate
      sx={{ m: 1, textAlign: "center", flexDirection: "row" }}
    >
      <Container>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: "fontWeightLight" }}>
          Welcome! Log in, please.
        </Typography>
      </Container>
      <Container>
        <TextField
          name="username"
          label="Username"
          sx={{ mt: 1, mb: 2 }}
          onChange={loginDataHandler}
        />
      </Container>
      <Container>
        <TextField
          name="password"
          label="Password"
          type="password"
          sx={{ mt: 1, mb: 2 }}
          onChange={loginDataHandler}
        />
      </Container>
      <Button
        component={Link}
        to={"/"}
        variant="contained"
        type="button"
        sx={{ mb: 2, ml: 1 }}
        onClick={onSubmit}
      >
        Log In!
      </Button>
      <Box>
        <Link to="/register">Don't have an account? Register here!</Link>
      </Box>
    </Box>
  );
};

export default Login;
