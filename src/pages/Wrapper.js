import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Wrapper = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Outlet />
    </div>
  );
};

export default Wrapper;
