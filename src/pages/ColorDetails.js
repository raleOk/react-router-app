import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Box,
} from "@mui/material";

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

  const backHandler = () => {
    navigate("/colors");
  };
  return (
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
          <Button size="small" onClick={backHandler}>
            Back
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ColorDetails;
