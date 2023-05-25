import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addProductToBasket, removeItemFromBasket } from "../store/actions";

export const MyCard = ({ id, title, description, image, price }) => {
  const { basket } = useSelector((state) => state);
  const dispatch = useDispatch();
  const isExistItem = (id) => {
    return basket.some((item) => item.id == id);
  };
  const handleToggleBasket = (data) => {
    if (!isExistItem(id)) {
      dispatch(addProductToBasket(data));
      return;
    }
    dispatch(removeItemFromBasket(data.id));
  };
  return (
    <Card>
      <CardMedia
        component="img"
        sx={{ height: 150, objectFit: "contain" }}
        image={image}
        title="green iguana"
      />
      <CardContent
        sx={{ minHeight: 170, maxHeight: 170, boxSizing: "border-box" }}
      >
        <Typography gutterBottom variant="h6" component="div" lineHeight={1}>
          {title.length > 35 ? title.substring(0, 35) + " ..." : title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description.length > 90
            ? description.substring(1, 90) + " ..."
            : description}
        </Typography>
        <Typography variant="h6" fontWeight="bold" color="#eb4034">
          {price}$
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button
          onClick={() =>
            handleToggleBasket({ id, title, description, image, price })
          }
          sx={
            !isExistItem(id)
              ? {
                  backgroundColor: "#1976d2",
                  color: "white",
                  ":hover": {
                    bgcolor: "#054BB0",
                    color: "white",
                  },
                }
              : {
                  backgroundColor: "#eb4034",
                  color: "white",
                  ":hover": {
                    bgcolor: "#D3310D",
                    color: "white",
                  },
                }
          }
          size="small"
        >
          {!isExistItem(id) ? "Add to basket" : "Remove from item"}
        </Button>
      </CardActions>
    </Card>
  );
};
