import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { LoginPage } from "../pages/public/Auth/Login";
import { ProductsPage } from "../pages/public/Products/Products";


export const AppRoute = ({ element, isAuthProtected, path }) => {
  const { loggedIn } = useContext(AuthContext);
  return isAuthProtected ? (
    loggedIn ? (
        element
    ) : (
      <LoginPage/>
    )
  ) : loggedIn ? (
    path !== "/signin"&&path!=="/signup"? (
        element
    ) : (
      <ProductsPage/>
    )
  ) : (
    element
  );
};
