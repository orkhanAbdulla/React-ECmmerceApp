import { Alert, CardMedia, Grid, Button, Typography } from "@mui/material";
import { Layout } from "../../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { addProductToBasket } from "../../../store/actions";

export const BasketPage = () => {
  // const { items, isExistItem, addToBasket } = useContext(BasketContext);

  const {basket}=useSelector(state => state)
  const dispatch=useDispatch()
  const isExistItem=(id)=>{
    return basket.some(item=>item.id==id)
  }
  const total = basket.reduce((acc, item) => acc + item.price, 0);

  const addToBasket=(data)=>{
    dispatch(addProductToBasket(data)) 
  }
  return (
    <Layout>
      <Grid>
        {basket.length < 1 && (
          <Alert severity="error">You have not any items in your basket </Alert>
        )}
        {basket.length > 0 && (
          <ul>
            {basket.map((item) => (
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
        {basket.length > 0 && (
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
