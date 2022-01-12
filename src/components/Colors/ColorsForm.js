import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { nanoid } from "nanoid";

const ColorsForm = props => {
  const [color, setColor] = useState({});
  const { addColorHandler } = props;

  const id = nanoid();

  const changeHandler = event => {
    setColor(prevState => {
      return { ...prevState, [event.target.name]: event.target.value, id };
    });
  };

  const addColor = () => {
    const colors = JSON.parse(localStorage.getItem("colorsData"));
    colors.push(color);
    localStorage.setItem("colorsData", JSON.stringify(colors));
    addColorHandler(color);
  };

  return (
    <Box component="form" noValidate sx={{ m: 1, textAlign: "center" }}>
      <Typography variant="body1">Add a new color!</Typography>

      <TextField
        name="name"
        label="Name"
        sx={{ mt: 1, mr: 1 }}
        onChange={changeHandler}
      >
        Color:
      </TextField>

      <TextField
        name="year"
        label="Year"
        type="number"
        sx={{ mt: 1, mr: 1 }}
        onChange={changeHandler}
      >
        Year:
      </TextField>

      <TextField
        name="color"
        label="Hexadecimal value"
        onChange={changeHandler}
        sx={{ mt: 1, mr: 1 }}
      >
        Hex value:
      </TextField>

      <TextField
        name="pantone_value"
        label="Pantone value"
        onChange={changeHandler}
        sx={{ mt: 1, ml: 1 }}
      >
        Pantone value:
      </TextField>

      <Button
        type="button"
        variant="contained"
        size="small"
        sx={{ mt: 2, ml: 2 }}
        onClick={addColor}
      >
        Add Color!
      </Button>
    </Box>
  );
};

export default ColorsForm;
