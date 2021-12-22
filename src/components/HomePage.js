import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const onLogout = () => {
    localStorage.removeItem("isLogged");
  };
  return (
    <div>
      <Link to="/login">
        <button type="button" onClick={onLogout}>
          Log out
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
