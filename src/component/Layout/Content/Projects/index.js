/*----- Core -----*/
import React, { useState, useEffect } from "react";
// import { data } from "../../../../utils/data";
import { nanoid } from "nanoid";
import ProjectCard from "./card/";
import { CardBinder } from "../../../Styles/CardBinder";
import PropTypes from "prop-types";

const Projects = ({ filteredProjects }) => {
  const [projects, setProjects] = useState(filteredProjects);
  const url = "https://tswwqpqg6i.execute-api.us-east-1.amazonaws.com/Test/";

  const fetchProjects = async () => {
    try {
      const result = await fetch(`${url}projects`).then((result) =>
        result.json()
      );
      setProjects(result);
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const projectsList = () => {
    return projects.map((project) => (
      <ProjectCard
        id={nanoid()}
        name={project.name}
        img={project.img}
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
    <>
      <CardBinder>{projectsList()}</CardBinder>
    </>
  );
};

Projects.propTypes = {
  filteredProjects: PropTypes.object,
};

Projects.defaultProps = {
  filteredProjects: null,
};

export default Projects;
