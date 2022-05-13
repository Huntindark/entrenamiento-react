import React from "react";
import Card from "../../../../Generic/Card";
import PropTypes from "prop-types";
import { StyledP } from "../../../../Styles/StyledP";

const ProjectCard = ({ name, img }) => {
  return (
    <>
      <Card>
        <img src={img} />
        <StyledP>{name}</StyledP>
      </Card>
    </>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ProjectCard;
