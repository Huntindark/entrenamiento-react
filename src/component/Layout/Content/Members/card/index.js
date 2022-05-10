import React from "react";
import PropTypes from "prop-types";
import Card from "../../../../Generic/Card";

const MemberCard = ({ firstName, lastName, role }) => {
  return (
    <>
      <Card>
        <p>
          {firstName} {lastName}
        </p>
        <p>{role}</p>
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
