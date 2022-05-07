/*----- Core -----*/
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Projects from "./Projects";
import Members from "./Members";
import Search from "./Search";

const Home = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/proyects">Proyectos</Link>
        </li>
        <li>
          <Link to="/members">Miembros</Link>
        </li>
        <li>
          <Link to="/search">Busqueda</Link>
        </li>
      </ul>
    </>
  );
};

const Content = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/proyects" element={<Projects />} />
        <Route exact path="/members" element={<Members />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </>
  );
};

export default Content;
