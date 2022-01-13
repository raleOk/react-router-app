import React from "react";
import { TableRow, TablePagination } from "@mui/material";

const ColorsTablePagination = props => {
  const {
    rowsPerPageOptions,
    count,
    rowsPerPage,
    page,
    onPageChange,
    onRowsPerPageChange,
  } = props;

  return (
    <TableRow>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </TableRow>
  );
};

export default ColorsTablePagination;
