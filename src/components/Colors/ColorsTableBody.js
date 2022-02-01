import React from "react";
import { useNavigate } from "react-router-dom";
import { TableBody, TableRow, TableCell } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";

const ColorsTableBody = props => {
  const { rows, currPage, rowsPerPage, setShowModal, setColorId, iconStyles } =
    props;

  const navigate = useNavigate();

  const onDetails = i => {
    navigate(`/colors/${i}`);
  };

  const onEdit = i => {
    navigate(`/colors/edit/${i}`);
  };

  const onDelete = i => {
    setColorId(i);
    setShowModal(true);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - currPage * rowsPerPage);

  return (
    <TableBody>
      {rows
        .slice(currPage * rowsPerPage, currPage * rowsPerPage + rowsPerPage)
        .map(row => (
          <TableRow
            key={row.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.year}</TableCell>
            <TableCell align="right">{row.color}</TableCell>
            <TableCell align="right">{row.pantone_value}</TableCell>
            <TableCell align="right">
              <SearchIcon
                sx={iconStyles}
                onClick={() => {
                  onDetails(row.id);
                }}
              />
            </TableCell>
            <TableCell align="right">
              <EditIcon sx={iconStyles} onClick={() => onEdit(row.id)} />
            </TableCell>
            <TableCell align="right">
              <DeleteIcon sx={iconStyles} onClick={() => onDelete(row.id)} />
            </TableCell>
          </TableRow>
        ))}
      {emptyRows > 0 && (
        <TableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
};

export default ColorsTableBody;
