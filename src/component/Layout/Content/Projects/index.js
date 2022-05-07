/*----- Core -----*/
import React from "react";
import { data } from "../../../../utils/data"
import { nanoid } from "nanoid";
import ProjectCard from "./card/"


const Projects = () => {
  const projects = data.projects

  const projectsList = projects.map(project => (
    <ProjectCard id={nanoid()} name={project.name} img={project.img} stack={project.stack} key ={nanoid()}/>
  ));

  return (
    <>
      <p>Pagina de proyectos</p>
      {projectsList}
    </>
  );
};

export default Projects;
