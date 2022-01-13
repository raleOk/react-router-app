import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
import { authContext } from "../auth/useAuth";
import axiosColors from "../components/Colors/axiosColors";

const Home = () => {
  const [userData, setUserData] = useState({});
  const { logout } = useContext(authContext);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUserData(data);
  }, []);

  const onLogout = () => {
    axiosColors();
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
