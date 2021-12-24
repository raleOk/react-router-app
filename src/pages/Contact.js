import React from "react";
import { Typography, Box } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";

const Contact = () => {
  return (
    <Box>
      <Typography variant="body1">
        <MailIcon /> testing123@gmail.com
      </Typography>

      <Typography variant="body1">
        <CallIcon /> 000/000000
      </Typography>
    </Box>
  );
};

export default Contact;
