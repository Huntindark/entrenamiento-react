/*----- Core -----*/
import React from "react";
import { data } from "../../../../utils/data"
import { nanoid } from "nanoid";
import MemberCard from "./card/"

const Members = () => {
  const members = data.members
  const roles = data.roles

  const membersList = members.map(member => (
    <MemberCard id={nanoid()} firstName={member.firstname} lastName={member.lastname} role={roles.find(item => item.id==member.role_id).label} key ={nanoid()}/>
  ));

  return (
    <>
      <p>Pagina de Miembros</p>
      {membersList}
    </>
  );
};

export default Members;