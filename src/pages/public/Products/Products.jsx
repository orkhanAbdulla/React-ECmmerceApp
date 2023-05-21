import { MyCard } from "../../../components/MyCard";
import { Container, Grid, CircularProgress, Stack } from "@mui/material";
import { axiosInstance } from "../../../network/axiosInstance";
import { useQuery } from "react-query";
import { Layout } from "../../../components/Layout";
export const ProductsPage = () => {
  const { data, error, isLoading, isSuccess, refetch } = useQuery(
    "productsData",
    () => {
      return axiosInstance.get("products");
    }
  );
  return (
    <Layout>
      <>
        {isLoading && (
          <Stack alignItems="center">
            <CircularProgress color="warning" />
          </Stack>
        )}
        {error && (
          <div style={{ color: "red", textAlign: "center" }}>
            An error has occured...{" "}
          </div>
        )}
        <Container>
          <Grid
            sx={{ paddingTop: 5 }}
            container
            spacing={{ xs: 10, md: 5 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {isSuccess &&
              data.data.map((item) => (
                <Grid key={item.id} item xs={3}>
                  <MyCard {...item} />
                </Grid>
              ))}
          </Grid>
        </Container>
      </>
    </Layout>
  );
};
