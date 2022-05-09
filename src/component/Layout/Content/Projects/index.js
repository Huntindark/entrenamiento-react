/*----- Core -----*/
import React from "react";
import { data } from "../../../../utils/data";
import { nanoid } from "nanoid";
import ProjectCard from "./card/";
import { CardBinder } from "../../../Styles/CardBinder";
import PropTypes from "prop-types";

const Projects = ({ projects = data.projects }) => {
  // const projects = data.projects

  const projectsList = projects.map((project) => (
    <ProjectCard
      id={nanoid()}
      name={project.name}
      img={project.img}
      stack={project.stack}
      key={nanoid()}
    />
  ));

  return (
    <>
      <p>Pagina de proyectos</p>
      <CardBinder>{projectsList}</CardBinder>
    </>
  );
};

Projects.propTypes = {
  projects: PropTypes.object,
};

export default Projects;
