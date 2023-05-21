import { useContext } from "react";
import { BasketContext } from "../../../contexts/BaskteContext";
import { Alert, CardMedia, Grid, Button, Typography } from "@mui/material";
import { Layout } from "../../../components/Layout";

export const BasketPage = () => {
  const { items, isExistItem, addToBasket } = useContext(BasketContext);
  const total = items.reduce((acc, item) => acc + item.price, 0);
  return (
    <Layout>
      <Grid>
        {items.length < 1 && (
          <Alert severity="error">You have not any items in your basket </Alert>
        )}
        {items.length > 0 && (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.title} - {item.price}$
                <CardMedia
                  component="img"
                  sx={{ height: 150, width: 150, objectFit: "contain" }}
                  image={item.image}
                  title="green iguana"
                />
                <Button
                  onClick={() => addToBasket(item)}
                  sx={
                    isExistItem(item.id)
                      ? {
                          backgroundColor: "#eb4034",
                          color: "white",
                          ":hover": {
                            bgcolor: "#D3310D",
                            color: "white",
                          },
                        }
                      : {
                          backgroundColor: "#1976d2",
                          color: "white",
                          ":hover": {
                            bgcolor: "#054BB0",
                            color: "white",
                          },
                        }
                  }
                  size="small"
                >
                  {isExistItem(item.id)
                    ? "Remove from basker"
                    : "Add to basket"}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </Grid>
      <Grid marginTop={10}>
        {items.length > 0 && (
          <Typography
            fontSize={22}
            gutterBottom
            variant="h6"
            component="div"
            lineHeight={1}
          >
            Total:{total}
          </Typography>
        )}
      </Grid>
    </Layout>
  );
};
