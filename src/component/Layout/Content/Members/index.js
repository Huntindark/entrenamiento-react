/*----- Core -----*/
import React from "react";
import { data } from "../../../../utils/data";
import { nanoid } from "nanoid";
// import MemberCard from "./card/"
import { CardBinder } from "../../../Styles/CardBinder";
import MemberCard from "./card/";
// import { StyledMemberCard } from "./card/styles";
import PropTypes from "prop-types";

const Members = ({ members = data.members }) => {
  // const members = data.members
  const roles = data.roles;

  const membersList = members.map((member) => (
    <MemberCard
      id={nanoid()}
      firstName={member.firstname}
      lastName={member.lastname}
      role={roles.find((item) => item.id == member.role_id).label}
      key={nanoid()}
    />
  ));

  return (
    <>
      <p>Pagina de Miembros</p>
      <CardBinder>{membersList}</CardBinder>
    </>
  );
};

Members.propTypes = {
  members: PropTypes.object,
};

export default Members;
