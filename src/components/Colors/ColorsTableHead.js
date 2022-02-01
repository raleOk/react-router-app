import React from "react";
import { useNavigate } from "react-router-dom";
import { TableHead, TableRow, TableCell } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const ColorsTableHead = props => {
  const { iconStyles } = props;

  const navigate = useNavigate();

  const addNewHandler = () => {
    navigate("/colors/add");
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell>Color</TableCell>
        <TableCell align="right">Year</TableCell>
        <TableCell align="right">Hexadecimal value</TableCell>
        <TableCell align="right">Pantone value</TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell align="right">
          <AddCircleOutlineIcon
            color="primary"
            sx={iconStyles}
            onClick={addNewHandler}
          />
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default ColorsTableHead;
