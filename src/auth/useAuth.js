import React, { useState, createContext } from "react";

const authContext = createContext();

const useAuth = () => {
  const [auth, setAuth] = useState(-1);

  return {
    auth,
    authHandler() {
      const a = localStorage.getItem("auth");
      switch (a) {
        case "true":
          setAuth(true);
          break;
        case "false":
          setAuth(false);
          break;
      }
    },
    authLogin() {
      localStorage.setItem("auth", "true");
      setAuth(true);
    },
    authLogout() {
      localStorage.setItem("auth", "false");
      setAuth(false);
    },
  };
};

const AuthProvider = props => {
  const { auth, authHandler, authLogin, authLogout } = useAuth();

  return (
    <authContext.Provider value={{ auth, authHandler, authLogin, authLogout }}>
      {props.children}
    </authContext.Provider>
  );
};

export { authContext, AuthProvider };
