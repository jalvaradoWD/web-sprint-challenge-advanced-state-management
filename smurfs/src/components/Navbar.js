import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Smurf Home</Link>
      <Link to="/smurfForm">Smurf Form</Link>
    </nav>
  );
};

export default Navbar;
