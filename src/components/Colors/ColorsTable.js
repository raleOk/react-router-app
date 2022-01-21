import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableFooter,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ColorsTablePagination from "./ColorsTablePagination";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import ColorsEditForm from "./ColorsEditForm";
import ColorsDeleteModal from "./ColorsDeleteModal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import axiosColors from "./axiosColors";

const ColorsTable = () => {
  const [rows, setRows] = useState(
    JSON.parse(localStorage.getItem("colorsData"))
  );

  const navigate = useNavigate();

  //pagination state
  const [currPage, setCurrPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [totalRows, setTotalRows] = useState(0);

  //crud functionality state
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [colorId, setColorId] = useState(null);

  //loading state
  const [isLoading, setIsLoading] = useState(false);

  //page parameter for api call is always 1 higher than currentPage(api starts at 1, pagination at 0);
  const apiPage = currPage + 1;

  const handleChangePage = (event, newPage) => {
    setIsLoading(true);
    axiosColors(apiPage, setTotalRows, setRowsPerPage);
    setRows(JSON.parse(localStorage.getItem("colorsData")));
    setIsLoading(false);
    setCurrPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrPage(0);
  };

  const startEditing = i => {
    setIsEditing(true);
    setColorId(i);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  const handleDelete = i => {
    setColorId(i);
    setShowModal(true);
  };

  const modalHandler = () => {
    setShowModal(false);
  };

  const detailsPage = i => {
    navigate(`/colors/${i}`);
  };

  const addNewHandler = () => {
    navigate("/colors/addColor");
  };

  const iconStyles = {
    ":hover": { backgroundColor: "#DADADA" },
    width: "25px",
    height: "25px",
    padding: "4px ",
    borderRadius: "5px",
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - currPage * rowsPerPage);

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

  const tableBody = () => {
    return (
      <TableBody>
        {console.log(rows)}
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
                    detailsPage(row.id);
                  }}
                />
              </TableCell>
              <TableCell align="right">
                <EditIcon
                  sx={iconStyles}
                  onClick={() => startEditing(row.id)}
                />
              </TableCell>
              <TableCell align="right">
                <DeleteIcon
                  sx={iconStyles}
                  onClick={() => handleDelete(row.id)}
                />
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
    <>
      {showModal ? (
        <ColorsDeleteModal
          showModal={showModal}
          modalHandler={modalHandler}
          colorId={colorId}
          setRows={setRows}
        />
      ) : (
        ""
      )}

      {isLoading ? (
        <Typography>LOADING...</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            {tableHead()}

            {isEditing ? (
              <ColorsEditForm
                currId={colorId}
                stopEditing={stopEditing}
                setRows={setRows}
              />
            ) : (
              tableBody()
            )}

            <TableFooter>
              <ColorsTablePagination
                rowsPerPageOptions={[]}
                count={totalRows}
                rowsPerPage={rowsPerPage}
                page={currPage}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableFooter>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default ColorsTable;
