import React, { useContext } from "react";
import { useLocation, matchPath, Link } from "react-router-dom";
import { Tabs, Tab, Button, Typography } from "@mui/material";
import PaletteIcon from "@mui/icons-material/Palette";
import { authContext } from "../../auth/useAuth";

const MyTabs = () => {
  const { logout } = useContext(authContext);

  const useRouteMatch = patterns => {
    const { pathname } = useLocation();

    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i];
      const possibleMatch = matchPath(pattern, pathname);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }
    return null;
  };
  const routeMatch = useRouteMatch(["/", "/about", "/contact", "/colors"]);
  const currentTab = routeMatch?.pattern?.path;

  const logOut = () => {
    const data = JSON.parse(localStorage.getItem("colorsData"));
    const initialData = data.slice(0, 6);
    localStorage.setItem("colorsData", JSON.stringify(initialData));
    logout();
  };

  return (
    <Tabs value={currentTab} centered>
      <Typography
        sx={{
          fontFamily: "Helvetica",
          position: "absolute",
          left: 10,
          fontSize: 18,
        }}
        variant="body1"
      >
        <PaletteIcon size="large" /> CompanyName
      </Typography>

      <Tab label="Home" value="/" to="/" component={Link} />
      <Tab label="Colors" value="/colors" to="/colors" component={Link} />
      <Tab label="About" value="/about" to="/about" component={Link} />
      <Tab label="Contact" value="/contact" to="/contact" component={Link} />
      <Button
        component={Link}
        to={"/login"}
        color="error"
        onClick={logOut}
        sx={{ ml: 7 }}
      >
        Log out
      </Button>
    </Tabs>
  );
};

export default MyTabs;
