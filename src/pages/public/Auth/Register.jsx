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
import { singUpValidations } from "./validations";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../../components/Layout";
export const RegisterPage = () => {
  const navigate = useNavigate();
  const { handlerLogInOut } = useContext(AuthContext);
  //use Formik
  const { handleSubmit, handleChange, touched, values, errors } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: singUpValidations,
    onSubmit: ({ username, email, password }, bag) => {
      const user = {
        username,
        email,
        password,
      };
      const localUsers = JSON.parse(localStorage.getItem("users"));
      if (localUsers != null) {
        const isExist = localUsers.some(
          (user) => user.email.toLowerCase() == email.toLowerCase()
        );
        if (isExist) {
          bag.setErrors({ general: `email:${email} already exist` });
          return;
        } else {
          localStorage.setItem("users", JSON.stringify([...localUsers, user]));
        }
      } else {
        localStorage.setItem("users", JSON.stringify([user]));
      }
      handlerLogInOut(true, () => navigate("/products"));
    },
  });

  return (
    <Layout>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid textAlign="center" marginBottom={2}>
            <Typography variant="h5" fontWeight="bold">
              Sign Up
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
              name="username"
              label="Username"
              variant="standard"
              placeholder="Enter you username"
              onChange={handleChange}
              value={values.username}
              error={touched.username && Boolean(errors.username)}
              helperText={touched.username && errors.username}
            />
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
            <TextField
              type="password"
              name="confirmPassword"
              fullWidth
              label="Confirm Password"
              variant="standard"
              placeholder="Enter you comfirm password"
              onChange={handleChange}
              value={values.confirmPassword}
              error={touched.confirmPassword && Boolean(errors.confirmPassword)}
              helperText={touched.confirmPassword && errors.confirmPassword}
            />
            <Grid marginTop={3}>
              <Button
                fullWidth
                textAlign="center"
                type="submit"
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Layout>
  );
};
