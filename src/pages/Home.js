import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "../components/HomePage";

const Home = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("isLogged") === null) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default Home;
