import React, { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./auth/ProtectedRoutes";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Colors from "./pages/Colors";
import NotFound from "./pages/NotFound";
import ColorDetails from "./pages/ColorDetails";
import ColorsForm from "./components/Colors/ColorsForm";
import Navbar from "./components/Navbar/Navbar";
import axiosColors from "./components/Colors/axiosColors";
import { authContext } from "./auth/useAuth";

const App = () => {
  const { authHandler } = useContext(authContext);

  useEffect(() => {
    if (localStorage.getItem("colorsData") === null) {
      axiosColors();
    }
    authHandler();
  }, [authHandler]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} exact />
            <Route path="/colors" element={<Colors />} />
            <Route path="/colors/:colorId" element={<ColorDetails />} />
            <Route path="/colors/addColor" element={<ColorsForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
