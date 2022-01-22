import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Box, TextField, Button, Typography, Container } from "@mui/material";
import { nanoid } from "nanoid";

const ColorsForm = () => {
  const [color, setColor] = useState({});

  const [inputErr, setInputErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [yearErr, setYearErr] = useState(false);
  const [hexErr, setHexErr] = useState(false);
  const [panErr, setPanErr] = useState(false);

  const navigate = useNavigate();
  const id = nanoid();

  const changeHandler = event => {
    setColor(prevState => {
      return { ...prevState, [event.target.name]: event.target.value, id };
    });
  };

  const inputValidation = () => {
    if (
      color &&
      Object.keys(color).length === 0 &&
      Object.getPrototypeOf(color) === Object.prototype
    ) {
      setInputErr(true);
      return false;
    } else {
      setInputErr(false);
      return true;
    }
  };

  const nameValidation = () => {
    if (color.name === undefined || color.name.length < 2) {
      setNameErr(true);
      return false;
    } else {
      setNameErr(false);
      return true;
    }
  };

  const yearValidation = () => {
    if (color.year === undefined || Number(color.year) <= 1990) {
      setYearErr(true);
      return false;
    } else {
      setYearErr(false);
      return true;
    }
  };

  const hexValidation = () => {
    const regX = /[0-9A-Fa-f]{6}/g;
    regX.lastIndex = 0;
    if (!regX.test(color.color)) {
      setHexErr(true);
      return false;
    } else {
      setHexErr(false);
      return true;
    }
  };

  const panValidation = () => {
    if (color.pantone_value === undefined || color.pantone_value[2] !== "-") {
      setPanErr(true);
      return false;
    } else {
      setPanErr(false);
      return true;
    }
  };

  const addColor = () => {
    const nameVal = nameValidation();
    const yearVal = yearValidation();
    const hexVal = hexValidation();
    const panVal = panValidation();
    const inputVal = inputValidation();

    if (nameVal && yearVal && hexVal && panVal && inputVal) {
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
          color={inputErr ? "red" : "black"}
        >
          {inputErr ? "Fill out all fields please!" : "Add a new color!"}
        </Typography>
      </Container>

      <Container>
        <TextField
          name="name"
          label="Name"
          sx={{ mt: 1, mb: 2 }}
          error={nameErr}
          helperText={nameErr ? "Name must be longer than 2 characters!" : ""}
          onChange={changeHandler}
        />
      </Container>

      <Container>
        <TextField
          name="year"
          label="Year"
          sx={{ mt: 1, mb: 2 }}
          error={yearErr}
          helperText={yearErr ? "Year must be after 1990!" : ""}
          onChange={changeHandler}
        />
      </Container>

      <Container>
        <TextField
          name="color"
          label="Hexadecimal value"
          sx={{ mt: 1, mb: 2 }}
          error={hexErr}
          helperText={hexErr ? "Enter a valid Hexadecimal value!" : ""}
          onChange={changeHandler}
        />
      </Container>

      <Container>
        <TextField
          name="pantone_value"
          label="Pantone value"
          sx={{ mt: 1, mb: 2 }}
          error={panErr}
          helperText={
            panErr ? "Invalid pantone value format! (eg. 17-2901)" : ""
          }
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
