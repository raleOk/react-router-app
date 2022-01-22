import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";

const ColorDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [colorToDisplay, setColorToDisplay] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("colorsData"));
    const color = data.find(c => {
      return String(c.id) === String(params.colorId);
    });
    setColorToDisplay(color);
  }, [params.colorId]);

  return (
    <>
      <IconButton
        type="button"
        variant="outlined"
        color="primary"
        onClick={() => {
          navigate("/colors");
        }}
        sx={{ float: "right", mt: 2, mr: 2 }}
      >
        <CloseIcon />
      </IconButton>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="75vh"
      >
        <Card
          sx={{
            maxWidth: 345,
          }}
        >
          <CardMedia
            style={{ backgroundColor: `${colorToDisplay.color} ` || "white" }}
            component="img"
            height="120"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {colorToDisplay.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hex value: {colorToDisplay.color}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Year: {colorToDisplay.year}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Pantone value: {colorToDisplay.pantone_value}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              sx={{ ml: 16 }}
              size="small"
              variant="outlined"
              onClick={() => {
                navigate(`/colors/edit/${params.colorId}`);
              }}
            >
              <EditIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default ColorDetails;
