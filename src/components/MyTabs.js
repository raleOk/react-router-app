import React from "react";
import { useLocation, matchPath, Link } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";

const MyTabs = () => {
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
  const routeMatch = useRouteMatch(["/", "/about", "/contact"]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab} centered>
      <Tab label="Home" value="/" to="/" component={Link} />
      <Tab label="About" value="/about" to="/about" component={Link} />
      <Tab label="Contact" value="/contact" to="/contact" component={Link} />
    </Tabs>
  );
};

export default MyTabs;
