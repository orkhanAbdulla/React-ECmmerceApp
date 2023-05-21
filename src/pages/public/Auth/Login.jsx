import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import { useFormik } from "formik";
import { paperStyle } from "./AuthStyles";
import { singInValidations } from "./validations";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../../components/Layout";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { handlerLogInOut } = useContext(AuthContext);
  //use Formik
  const { handleSubmit, handleChange, touched, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: singInValidations,
    onSubmit: ({ email, password }, bag) => {
      const localUsers = JSON.parse(localStorage.getItem("users"));
      if (localUsers != null) {
        const isExist = localUsers.some(
          (user) => user.email.toLowerCase() == email.toLowerCase() && user.password.toLowerCase()==password.toLowerCase()
        );
        if (isExist) {
          handlerLogInOut(true, () => navigate("/products"));
          return;
        } else {
          bag.setErrors({ general: `email or password incorrect` });
        }
      } else {
        bag.setErrors({ general: `email or password incorrect` });
      }
     
    },
  });
  return (
    <Layout>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid textAlign="center" marginBottom={2}>
            <Typography variant="h5" fontWeight="bold">
              Sign In
            </Typography>
            <Typography variant="caption">
              Please fill this from to create an account!
            </Typography>
          </Grid>
          <Grid>
            {errors.general && <Alert severity="error">{errors.general}</Alert>}
          </Grid>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              name="email"
              label="Email"
              variant="standard"
              placeholder="Enter you email"
              onChange={handleChange}
              value={values.email}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <TextField
              fullWidth
              type="password"
              name="password"
              label="Password"
              variant="standard"
              placeholder="Enter you password"
              onChange={handleChange}
              value={values.password}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
            <Grid marginTop={3}>
              <Button
                fullWidth
                textAlign="center"
                type="submit"
                variant="contained"
                color="primary"
              >
                 Sign In
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Layout>
  );
};
