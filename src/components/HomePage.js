import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "@mui/material";

const HomePage = () => {
  const onLogout = () => {
    localStorage.removeItem("isLogged");
  };
  return (
    <Container>
      <Button
        component={Link}
        to={"/login"}
        variant="outlined"
        color="error"
        type="button"
        onClick={onLogout}
      >
        Log out!
      </Button>
    </Container>
  );
};

export default HomePage;
