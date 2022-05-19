/*----- Core -----*/
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../contexts/ThemeStore";
import { StyledLink } from "../../Generic/Link/styles";
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
        <StyledLink to="" onClick={handleClick}>
          Volver
        </StyledLink>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
