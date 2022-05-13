import React from "react";
import PropTypes from "prop-types";
import Card from "../../../../Generic/Card";
import { StyledP } from "../../../../Styles/StyledP";

const MemberCard = ({ firstName, lastName, role }) => {
  return (
    <>
      <Card>
        <StyledP>
          {firstName} {lastName}
        </StyledP>
        <StyledP>{role}</StyledP>
      </Card>
    </>
  );
};

MemberCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

MemberCard.defaultProps = {
  firstName: "Missing",
  lastName: "Names",
  role: "Filler",
};

export default MemberCard;
