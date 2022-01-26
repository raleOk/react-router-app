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
import ColorsNewForm from "./pages/ColorsNewForm";
import Navbar from "./components/Navbar/Navbar";
import ColorsEditForm from "./pages/ColorsEditForm";
import { authContext } from "./auth/useAuth";

const App = () => {
  const { authHandler } = useContext(authContext);
  useEffect(() => {
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
            <Route path="/colors/add" element={<ColorsNewForm />} />
            <Route path="/colors/edit/:colorId" element={<ColorsEditForm />} />
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
