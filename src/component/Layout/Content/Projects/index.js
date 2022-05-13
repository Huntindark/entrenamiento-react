/*----- Core -----*/
import React, { useState, useEffect, useContext } from "react";
import { projectImages } from "../../../../utils/data";
import { nanoid } from "nanoid";
import ProjectCard from "./card/";
import CardBinder from "../../../Generic/CardBinder";
import PropTypes from "prop-types";
import { APIContext } from "../../../../contexts/APIStore";

const Projects = ({ filteredProjects }) => {
//   const [state] = useContext(APIContext);
//   // const [state] = useAPIContext();
//   const [projects, setProjects] = useState(filteredProjects);
//   console.log(state)
//   useEffect(() => {
//     // let validOnes = filteredProjects ? state.projects : filteredProjects 
    
//     setProjects(state.projects)
//   }, [])

//   const projectsList = () => {
//     return projects.map((project) => (
//       <ProjectCard
//         id={nanoid()}
//         name={project.name}
//         img={projectImages[project.img]}
//         stack={project.stack}
//         key={nanoid()}
//       />
//     ));
//   };

//   if (!projects)
//     return (
//       <>
//         <p>Holis, awanta</p>
//       </>
//     );
//   return (
//     <>
//       <CardBinder>{projectsList()}</CardBinder>
//     </>
//   );
return<></>
};

Projects.propTypes = {
  filteredProjects: PropTypes.object,
};

Projects.defaultProps = {
  filteredProjects: null,
};

export default Projects;
