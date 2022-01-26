import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import MyTabs from "./MyTabs";
import PaletteIcon from "@mui/icons-material/Palette";
import LogoutIcon from "@mui/icons-material/Logout";
import { authContext } from "../../auth/useAuth";

const Navbar = () => {
  const { authLogout } = useContext(authContext);

  const logOut = () => {
    localStorage.removeItem("token");
    authLogout();
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Typography
          sx={{
            fontFamily: "Helvetica",
            position: "absolute",
            left: 15,
            fontSize: 25,
          }}
          variant="body1"
        >
          <PaletteIcon size="large" /> ColorCRUD
        </Typography>
        <MyTabs />
        <Outlet />
        <Button
          component={Link}
          to={"/login"}
          variant="contained"
          startIcon={<LogoutIcon />}
          color="error"
          size="small"
          onClick={logOut}
          sx={{ position: "absolute", right: 10, top: 9 }}
        >
          Log out
        </Button>
      </Box>
    </>
  );
};

export default Navbar;
