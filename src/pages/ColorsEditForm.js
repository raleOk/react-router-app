import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Box, Container, Typography, TextField, Button } from "@mui/material";

const ColorsEditForm = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [editedColor, setEditedColor] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("colorsData"));
    const color = data.find(c => {
      return String(c.id) === String(params.colorId);
    });
    setEditedColor(color);
  }, [params.colorId]);

  const onChangeHandler = event => {
    setEditedColor(prevState => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const onSubmit = () => {
    const data = JSON.parse(localStorage.getItem("colorsData"));
    const objIndex = data.findIndex(c => {
      return String(c.id) === String(params.colorId);
    });
    data[objIndex] = editedColor;
    localStorage.setItem("colorsData", JSON.stringify(data));
    navigate("/colors");
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
          What do you want to change?
        </Typography>
      </Container>

      <Container>
        <TextField
          InputLabelProps={{ shrink: true }}
          label="Name"
          name="name"
          sx={{ mt: 1, mb: 2 }}
          defaultValue={editedColor.name}
          value={editedColor.name || {}}
          onChange={onChangeHandler}
        />
      </Container>

      <Container>
        <TextField
          InputLabelProps={{ shrink: true }}
          name="year"
          label="Year"
          sx={{ mt: 1, mb: 2 }}
          defaultValue={editedColor.year}
          value={editedColor.year || {}}
          onChange={onChangeHandler}
        />
      </Container>

      <Container>
        <TextField
          InputLabelProps={{ shrink: true }}
          name="color"
          label="Hexadecimal value"
          sx={{ mt: 1, mb: 2 }}
          defaultValue={editedColor.color}
          value={editedColor.color || {}}
          onChange={onChangeHandler}
        />
      </Container>
      <Container>
        <TextField
          InputLabelProps={{ shrink: true }}
          name="pantone_value"
          label="Pantone value"
          sx={{ mt: 1, mb: 2 }}
          defaultValue={editedColor.pantone_value}
          value={editedColor.pantone_value || {}}
          onChange={onChangeHandler}
        />
      </Container>

      <Button
        type="button"
        variant="contained"
        sx={{ mb: 2, ml: 1, mr: 2 }}
        onClick={onSubmit}
      >
        Edit!
      </Button>
      <Link to="/colors">Back...</Link>
    </Box>
  );
};

export default ColorsEditForm;
