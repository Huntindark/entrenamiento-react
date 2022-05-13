/*----- Core -----*/
import React from "react";
import { Route, Routes } from "react-router-dom";
import Projects from "./Projects";
import Members from "./Members";
// import Search from "./Search";
import { StyledLink } from "../../Styles/StyledLink";
import { LinkHolder } from "../../Styles/LinkHolder";

const Home = () => {
  return (
    <>
      <LinkHolder>
        <StyledLink to="/projects">Proyectos</StyledLink>
        <StyledLink to="/members">Miembros</StyledLink>
        {/* <StyledLink to="/search">Busqueda</StyledLink> */}
      </LinkHolder>
    </>
  );
};

const Content = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/members" element={<Members />} />
        {/* <Route exact path="/search" element={<Search />} /> */}
      </Routes>
    </>
  );
};

export default Content;
