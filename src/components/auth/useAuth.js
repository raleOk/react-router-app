import React, { useState, createContext } from "react";

const authContext = createContext();

const useAuth = () => {
  const [auth, setAuth] = useState(false);

  return {
    auth,
    login() {
      setAuth(true);
    },
    logout() {
      setAuth(false);
    },
  };
};

const AuthProvider = props => {
  const { auth, login, logout } = useAuth();

  return (
    <authContext.Provider value={{ auth, login, logout }}>
      {props.children}
    </authContext.Provider>
  );
};

export { authContext, useAuth, AuthProvider };
