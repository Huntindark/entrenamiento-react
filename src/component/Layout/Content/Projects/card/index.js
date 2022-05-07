import React from "react";

const ProjectCard = ({ name, img }) => {
  return(
  <>
    <img src={img} />
    <li>{name}</li>
  </>
  );
};

export default ProjectCard;