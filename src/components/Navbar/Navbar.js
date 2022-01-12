import React from "react";
import { Box } from "@mui/material";
import MyTabs from "./MyTabs";

const Navbar = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <MyTabs />
    </Box>
  );
};

export default Navbar;
