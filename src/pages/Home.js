import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container } from "@mui/material";

const Home = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("isLogged") === null) {
      navigate("/login");
    }
  }, [navigate]);

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

export default Home;
