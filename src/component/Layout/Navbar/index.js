/*----- Core -----*/
import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ThemeContext } from "../../../contexts/ThemeStore";
import { Snappler } from "../../Styles/Snappler";
import { StyledNavbar, StyledSun, StyledMoon } from "./styles";

const Navbar = () => {
  const navigate = useNavigate();
  const { theme, switchTheme } = useContext(ThemeContext); // get the current theme ('light' or 'dark')
  function handleClick() {
    navigate(-1);
  }
  return (
    <>
      <StyledNavbar>
        <Snappler>Snappler</Snappler>
        {theme === "dark" ? (
          <StyledSun size={32} onClick={() => switchTheme("light")} />
        ) : (
          <StyledMoon size={32} onClick={() => switchTheme("dark")} />
        )}
        <Link to="" onClick={handleClick}>
          Volver
        </Link>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
