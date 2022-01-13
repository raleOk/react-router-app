import React, { useState, useEffect } from "react";
import { TableBody, TableCell, TextField, Button } from "@mui/material";

const ColorsEditForm = props => {
  const { currId, stopEditing, tableDataHandler } = props;

  const [editedColor, setEditedColor] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("colorsData"));
    const color = data.find(c => {
      return c.id === currId;
    });
    setEditedColor(color);
  }, []);

  const onChangeHandler = event => {
    setEditedColor(prevState => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const onSubmit = () => {
    const data = JSON.parse(localStorage.getItem("colorsData"));
    const objIndex = data.findIndex(c => {
      return c.id === currId;
    });
    data[objIndex] = editedColor;
    localStorage.setItem("colorsData", JSON.stringify(data));
    tableDataHandler(data);
    stopEditing();
  };

  return (
    <TableBody>
      <TableCell>
        <TextField
          InputLabelProps={{ shrink: true }}
          label="Name"
          name="name"
          defaultValue={editedColor.name}
          value={editedColor.name}
          onChange={onChangeHandler}
        />
      </TableCell>
      <TableCell>
        <TextField
          InputLabelProps={{ shrink: true }}
          name="year"
          label="Year"
          defaultValue={editedColor.year}
          value={editedColor.year}
          onChange={onChangeHandler}
        />
      </TableCell>
      <TableCell>
        <TextField
          InputLabelProps={{ shrink: true }}
          name="color"
          label="Hexadecimal value"
          defaultValue={editedColor.color}
          value={editedColor.color}
          onChange={onChangeHandler}
        />
      </TableCell>
      <TableCell>
        <TextField
          InputLabelProps={{ shrink: true }}
          name="pantone_value"
          label="Pantone value"
          defaultValue={editedColor.pantone_value}
          value={editedColor.pantone_value}
          onChange={onChangeHandler}
        />
      </TableCell>

      <TableCell>
        <Button type="button" variant="contained" onClick={onSubmit}>
          Edit!
        </Button>
      </TableCell>
    </TableBody>
  );
};

export default ColorsEditForm;
