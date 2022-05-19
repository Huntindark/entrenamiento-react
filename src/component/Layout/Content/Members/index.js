/*----- Core -----*/
import React, { useEffect, useState, useContext } from "react";
// import { data } from "../../../../utils/data";
import { nanoid } from "nanoid";
import CardBinder from "../../../Generic/CardBinder";
import MemberCard from "./card/";
import PropTypes from "prop-types";
import { APIContext } from "../../../../contexts/APIStore";
import StyledContent from "../styles";

const Members = ({ people = null }) => {
  const [members, setMembers] = useState(people);
  const [roles, setRoles] = useState(null);

  const { state } = useContext(APIContext);
  useEffect(() => {
    let validOnes = people || state.members;

    setMembers(validOnes);
    setRoles(state.roles);
  }, [people, state.members, state.roles, setMembers, setRoles]);

  const membersList = () => {
    return members.map((member) => (
      <MemberCard
        id={nanoid()}
        firstName={member.firstname}
        lastName={member.lastname}
        role={roles.find((item) => item.id == member.role_id).label}
        key={nanoid()}
      />
    ));
  };

  if (!roles || !members)
    return (
      <>
        <p>Holis, awanta</p>
      </>
    );
  return (
    <StyledContent>{<CardBinder>{membersList()}</CardBinder>}</StyledContent>
  );
};

Members.propTypes = {
  people: PropTypes.array,
};

export default Members;
