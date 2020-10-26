import React from "react";
import { Link } from "react-router-dom";
import NavbarStyles from "../styles/Navbar.styles";

const Navbar = () => {
  return (
    <NavbarStyles>
      <Link to="/">Smurf Home</Link>
      <Link to="/smurfForm">Smurf Form</Link>
    </NavbarStyles>
  );
};

export default Navbar;
