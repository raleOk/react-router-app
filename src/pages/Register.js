import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Box, Container, TextField, Button, Typography } from "@mui/material";
import { authContext } from "../components/auth/useAuth";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const { login } = useContext(authContext);

  const registerDataHandler = event => {
    setRegisterData(prevState => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const onSubmit = () => {
    localStorage.setItem("user", JSON.stringify(registerData));
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
          Create a new account! Register below.
        </Typography>
      </Container>

      <Container>
        <TextField
          name="username"
          label="Username"
          sx={{ mt: 1, mb: 2 }}
          onChange={registerDataHandler}
        />
      </Container>

      <Container>
        <TextField
          name="email"
          label="Email"
          type="email"
          sx={{ mt: 1, mb: 2 }}
          onChange={registerDataHandler}
        />
      </Container>
      <Container>
        <TextField
          name="password"
          label="Passwrod"
          type="password"
          sx={{ mt: 1, mb: 2 }}
          onChange={registerDataHandler}
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
        Register!
      </Button>
      <Box>
        <Link to="/login">Already have an account? Login!</Link>
      </Box>
    </Box>
  );
};

export default Register;
