import { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  let loginStatusFromStorage = false;
  if (localStorage.getItem("login") == "true") loginStatusFromStorage = true;
  else loginStatusFromStorage = false;

  const [loggedIn, setLoggedIn] = useState(loginStatusFromStorage);
  const handlerLogInOut = (status, redirect) => {
    setLoggedIn(status);
    status
      ? localStorage.setItem("login", "true")
      : localStorage.setItem("login", "false");
    redirect();
  };

  const values = {
    handlerLogInOut,
    loggedIn,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
