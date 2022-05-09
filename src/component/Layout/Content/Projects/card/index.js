import React from "react";
import Card from "../../../../Generic/Card";
import PropTypes from "prop-types";

const ProjectCard = ({ name, img }) => {
  return (
    <>
      <Card>
        <img src={img} />
        <p>{name}</p>
      </Card>
    </>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
};

export default ProjectCard;
