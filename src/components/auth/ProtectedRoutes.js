import React, { useContext } from "react";
import Navbar from "../Navbar";
import { Outlet, Navigate } from "react-router-dom";
import { authContext } from "./useAuth";

const ProtectedRoutes = ({ children }) => {
  const { auth } = useContext(authContext);

  return auth ? (
    <>
      <Navbar />
      {children}
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoutes;
