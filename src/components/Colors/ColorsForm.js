import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Box, TextField, Button, Typography, Container } from "@mui/material";
import { nanoid } from "nanoid";

const ColorsForm = () => {
  const [color, setColor] = useState({});

  const navigate = useNavigate();
  const id = nanoid();

  const changeHandler = event => {
    setColor(prevState => {
      return { ...prevState, [event.target.name]: event.target.value, id };
    });
  };

  const colorValidation = () => {
    const regX = /[0-9A-Fa-f]{6}/g;
    for (let i in color) {
      if (color[i] === "") {
        return false;
      }
    }
    if (color.name.length < 2) {
      alert("Name must be longer than 2 characters!");
      return false;
    }
    if (Number(color.year) < 1990) {
      alert("Year must be after 1990!");
      return false;
    }
    regX.lastIndex = 0;
    if (!regX.test(color.color)) {
      alert("Enter a valid Hexadecimal value!");
      return false;
    }
    if (color.pantone_value[2] !== "-") {
      alert("Invalid pantone value format! (eg. 17-2901)");
      return false;
    }
    return true;
  };

  const addColor = () => {
    const validate = colorValidation();
    if (validate) {
      setColor(prevState => {
        return { ...prevState, id };
      });
      const colors = JSON.parse(localStorage.getItem("colorsData"));
      colors.push(color);
      localStorage.setItem("colorsData", JSON.stringify(colors));
      navigate("/colors");
    } else {
      return;
    }
  };

  return (
    <Box
      component="form"
      noValidate
      sx={{ m: 1, textAlign: "center", flexDirection: "row" }}
    >
      <Container>
        <Typography
          variant="h5"
          sx={{ mb: 3, mt: 3, fontWeight: "fontWeightLight" }}
        >
          Add a new color!
        </Typography>
      </Container>

      <Container>
        <TextField
          name="name"
          label="Name"
          sx={{ mt: 1, mb: 2 }}
          onChange={changeHandler}
        />
      </Container>

      <Container>
        <TextField
          name="year"
          label="Year"
          sx={{ mt: 1, mb: 2 }}
          onChange={changeHandler}
        />
      </Container>

      <Container>
        <TextField
          name="color"
          label="Hexadecimal value"
          sx={{ mt: 1, mb: 2 }}
          onChange={changeHandler}
        />
      </Container>

      <Container>
        <TextField
          name="pantone_value"
          label="Pantone value"
          sx={{ mt: 1, mb: 2 }}
          onChange={changeHandler}
        />
      </Container>

      <Button
        type="button"
        variant="contained"
        sx={{ mb: 2, ml: 1, mr: 2 }}
        onClick={addColor}
      >
        Add Color!
      </Button>

      <Link to="/colors">Cancel...</Link>
    </Box>
  );
};

export default ColorsForm;
