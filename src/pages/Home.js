import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
import { authContext } from "../auth/useAuth";

const Home = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const { logout } = useContext(authContext);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUserData(data);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("isLogged") === null) {
      navigate("/login");
    }
  }, [navigate]);

  const onLogout = () => {
    localStorage.removeItem("isLogged");
    logout();
  };

  return (
    <Box sx={{ m: 1, textAlign: "center" }}>
      <Typography variant="subtitle1" comonent="h2">
        Welcome, {userData.username}!
      </Typography>

      <Button
        component={Link}
        to={"/login"}
        variant="outlined"
        color="error"
        size="small"
        type="button"
        onClick={onLogout}
      >
        Log out!
      </Button>
    </Box>
  );
};

export default Home;
