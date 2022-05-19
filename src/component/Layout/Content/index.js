/*----- Core -----*/
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Projects from "./Projects";
import Members from "./Members";
import Search from "./Search";
import { StyledLink } from "../../Generic/Link/styles";
import { LinkHolder } from "../../Styles/LinkHolder";
import StyledContent from "./styles";
import CreateMemberHolder from "./Members/Create/CreateMemberHolder";

const Home = () => {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }

  return (
    <StyledContent>
      <LinkHolder>
        <StyledLink to="/projects">Proyectos</StyledLink>
        <StyledLink to="/members">Miembros</StyledLink>
        <StyledLink to="/search">Busqueda</StyledLink>
        <button onClick={() => toggleModal()}>Crear</button>
      </LinkHolder>
      <CreateMemberHolder
        modal={modal}
        close={() => toggleModal()}
      ></CreateMemberHolder>
    </StyledContent>
  );
};

const Content = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        {/* <Route exact path="/members/create" element={<CreateMember />} /> */}
        <Route exact path="/members" element={<Members />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </>
  );
};

export default Content;
