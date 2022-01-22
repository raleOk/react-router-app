import React from "react";
import { Box, Button, Typography, Modal } from "@mui/material";

const ColorsDeleteModal = props => {
  const { showModal, modalHandler, colorId, setRows } = props;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const onExit = () => {
    modalHandler();
  };

  const onDelete = () => {
    const colors = JSON.parse(localStorage.getItem("colorsData"));
    const filteredColors = colors.filter(col => {
      return col.id !== colorId;
    });
    localStorage.setItem("colorsData", JSON.stringify(filteredColors));
    setRows(filteredColors);
    modalHandler();
  };

  return (
    <Modal
      open={showModal}
      onClose={modalHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Delete color?
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Are you sure you want to delete this color?
        </Typography>
        <Button onClick={onDelete}>Delete</Button>
        <Button
          onClick={onExit}
          sx={{
            cursor: "right",
            float: "right",
          }}
        >
          Exit
        </Button>
      </Box>
    </Modal>
  );
};

export default ColorsDeleteModal;
