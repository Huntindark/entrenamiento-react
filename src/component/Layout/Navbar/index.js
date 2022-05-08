/*----- Core -----*/
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { StyledNavbar } from "./styles";

const Navbar = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1)
  }
  return (
    <>
      <StyledNavbar>
        <p>Snappler</p>
        <Link to="" onClick={handleClick}>Volver</Link>
      </StyledNavbar>  
    </>
  );
};

export default Navbar;
