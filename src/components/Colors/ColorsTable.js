import React, { useState, useEffect } from "react";
import {
  Table,
  TableContainer,
  Paper,
  TableFooter,
  Typography,
} from "@mui/material";
import ColorsTablePagination from "./ColorsTablePagination";
import ColorsDeleteModal from "./ColorsDeleteModal";
import axiosColors from "./axiosColors";
import ColorsTableHead from "./ColorsTableHead";
import ColorsTableBody from "./ColorsTableBody";

const ColorsTable = () => {
  const [rows, setRows] = useState([]);

  //pagination state
  const [currPage, setCurrPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [totalRows, setTotalRows] = useState(0);

  //crud functionality state
  const [showModal, setShowModal] = useState(false);
  const [colorId, setColorId] = useState(null);

  //loading state
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axiosColors(1, setTotalRows, setRowsPerPage, setRows);
  }, []);

  const modalHandler = () => {
    setShowModal(false);
  };

  const iconStyles = {
    ":hover": { backgroundColor: "#DADADA" },
    width: "25px",
    height: "25px",
    padding: "4px ",
    borderRadius: "5px",
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
            <ColorsTableHead iconStyles={iconStyles} />
            <ColorsTableBody
              iconStyles={iconStyles}
              rows={rows}
              currPage={currPage}
              rowsPerPage={rowsPerPage}
              setShowModal={setShowModal}
              setColorId={setColorId}
            />

            <TableFooter>
              <ColorsTablePagination
                rowsPerPageOptions={[]}
                count={totalRows}
                rowsPerPage={rowsPerPage}
                page={currPage}
                setCurrPage={setCurrPage}
                setIsLoading={setIsLoading}
                axiosColors={axiosColors}
                setTotalRows={setTotalRows}
                setRowsPerPage={setRowsPerPage}
                setRows={setRows}
              />
            </TableFooter>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default ColorsTable;
