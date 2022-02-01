import React from "react";
import { TableRow, TablePagination } from "@mui/material";

const ColorsTablePagination = props => {
  const {
    rowsPerPageOptions,
    count,
    rowsPerPage,
    page,
    setCurrPage,
    setIsLoading,
    axiosColors,
    setTotalRows,
    setRowsPerPage,
    setRows,
  } = props;

  const handleChangePage = (event, newPage) => {
    // page parameter for api call is always 1 higher than currentPage(api starts at 1, pagination at 0);
    const apiPage = newPage + 1;
    if (page > newPage) {
      setCurrPage(newPage);
      return;
    } else {
      setIsLoading(true);
      axiosColors(apiPage, setTotalRows, setRowsPerPage, setRows);
      setRows(JSON.parse(localStorage.getItem("colorsData")));
      setIsLoading(false);
    }
    setCurrPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrPage(0);
  };

  return (
    <TableRow>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableRow>
  );
};

export default ColorsTablePagination;
