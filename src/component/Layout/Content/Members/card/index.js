import React from "react";

const MemberCard = ({ firstName, lastName, role }) => {
  return(
  <>
    <li>{firstName} {lastName}</li>
    <li>{role}</li>
  </>
  );
};

export default MemberCard;