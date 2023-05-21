import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  AppBar,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { CatchingPokemon } from "@mui/icons-material";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { BasketContext } from "../contexts/BaskteContext";
export const Layout = ({ children }) => {
  const navigate = useNavigate();
  const { loggedIn, handlerLogInOut } = useContext(AuthContext);
  const { items } = useContext(BasketContext);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemon />
          </IconButton>
          <Stack direction="row" spacing={2} flexGrow={1}>
            <Typography
              color="white"
              noWrap
              variant="h6"
              component={NavLink}
              to="/"
              sx={{ textDecoration: "none" }}
            >
              E-Commerce
            </Typography>
            <Typography
              color="white"
              noWrap
              variant="h6"
              component={NavLink}
              to="/products"
              sx={{ textDecoration: "none" }}
            >
              Products
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
          {items.length > 0 && (
              <Button  component={NavLink} to="/basket" variant="outlined" color="inherit">
                Basket ({items.length})
              </Button>
            )}
            {!loggedIn && (
              <>
                <Button component={NavLink} to="/signin" variant="outlined" color="inherit">
                  Sign In
                </Button>
                <Button component={NavLink} to="/signup" variant="outlined" color="inherit">
                  Sign Up
                </Button>
              </>
            )}
            {loggedIn && (
              <>
                <Button component={NavLink} to="/admin" variant="outlined" color="inherit">
                  Admin Panel
                </Button>
                <Button
                  onClick={() =>
                    handlerLogInOut(false, () => navigate("/products"))
                  }
                  color="error"
                  variant="outlined"
                >
                  Logout
                </Button>
              </>
            )}
      
          </Stack>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
};
