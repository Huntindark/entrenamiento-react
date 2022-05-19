/*----- Core -----*/
import React, { useState, useEffect, useContext } from "react";
import { projectImages } from "../../../../utils/data";
import { nanoid } from "nanoid";
import ProjectCard from "./card/";
import CardBinder from "../../../Generic/CardBinder";
import PropTypes from "prop-types";
import { APIContext } from "../../../../contexts/APIStore";
import StyledContent from "../styles";

const Projects = ({ filteredProjects = null }) => {
  const { state } = useContext(APIContext);
  const [projects, setProjects] = useState(filteredProjects);
  useEffect(() => {
    let validOnes = filteredProjects || state.projects;

    setProjects(validOnes);
  }, [filteredProjects, state.projects, setProjects]);

  const projectsList = () => {
    return projects.map((project) => (
      <ProjectCard
        id={nanoid()}
        name={project.name}
        img={projectImages[project.img]}
        stack={project.stack}
        key={nanoid()}
      />
    ));
  };

  if (!projects)
    return (
      <>
        <p>Holis, awanta</p>
      </>
    );
  return (
    <StyledContent>
      <CardBinder>{projectsList()}</CardBinder>
    </StyledContent>
  );
};

Projects.propTypes = {
  filteredProjects: PropTypes.object,
};

export default Projects;
