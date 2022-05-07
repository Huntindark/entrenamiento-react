/*----- Core -----*/
import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1)
  }
  return (
    <>
      <p>Snappler</p>
      <Link to="" onClick={handleClick}>Volver</Link>
    </>
  );
};

export default Navbar;
