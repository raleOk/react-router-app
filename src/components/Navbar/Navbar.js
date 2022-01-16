import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MyTabs from "./MyTabs";
import PaletteIcon from "@mui/icons-material/Palette";
import axiosColors from "../Colors/axiosColors";
import { authContext } from "../../auth/useAuth";

const Navbar = () => {
  const { authLogout } = useContext(authContext);

  const logOut = () => {
    axiosColors();
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
        <Button
          component={Link}
          to={"/login"}
          variant="outlined"
          color="error"
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
