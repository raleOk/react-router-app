import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableFooter,
} from "@mui/material";
import ColorsTablePagination from "./ColorsTablePagination";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import ColorsEditForm from "./ColorsEditForm";

const ColorsTable = props => {
  const { rows, tableDataHandler } = props;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [isEditing, setIsEditing] = useState(false);
  const [colorId, setColorId] = useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const startEditing = i => {
    setIsEditing(true);
    setColorId(i);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  const handleDelete = colorId => {
    const colors = JSON.parse(localStorage.getItem("colorsData"));
    const filteredColors = colors.filter(col => {
      return col.id !== colorId;
    });
    localStorage.setItem("colorsData", JSON.stringify(filteredColors));
    tableDataHandler(filteredColors);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const tableHead = () => {
    return (
      <TableHead>
        <TableRow>
          <TableCell>Color</TableCell>
          <TableCell align="right">Year</TableCell>
          <TableCell align="right">Hexadecimal value</TableCell>
          <TableCell align="right">Pantone value</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
    );
  };

  const tableBody = () => {
    return (
      <TableBody>
        {rows
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                <EditIcon onClick={() => startEditing(row.id)} />
              </TableCell>
              <TableCell align="right">
                <DeleteIcon onClick={() => handleDelete(row.id)} />
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

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {tableHead()}

        {isEditing ? (
          <ColorsEditForm
            currId={colorId}
            stopEditing={stopEditing}
            tableDataHandler={tableDataHandler}
          />
        ) : (
          tableBody()
        )}

        <TableFooter>
          <ColorsTablePagination
            rowsPerPageOptions={[5, 10, 25]}
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default ColorsTable;
