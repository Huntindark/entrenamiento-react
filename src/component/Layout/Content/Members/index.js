/*----- Core -----*/
import React, { useEffect, useState } from "react";
// import { data } from "../../../../utils/data";
import { nanoid } from "nanoid";
import { CardBinder } from "../../../Styles/CardBinder";
import MemberCard from "./card/";
import PropTypes from "prop-types";

const Members = ({ people }) => {
  const [members, setMembers] = useState(people);
  const [roles, setRoles] = useState(null);
  // const roles = data.roles;

  const url = "https://tswwqpqg6i.execute-api.us-east-1.amazonaws.com/Test/";

  const fetchMembers = async () => {
    try {
      const result = await fetch(`${url}members`).then((result) =>
        result.json()
      );
      setMembers(result);
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRoles = async () => {
    try {
      const resultRoles = await fetch(`${url}roles`).then((resultRoles) =>
        resultRoles.json()
      );
      setRoles(resultRoles);
      return resultRoles;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRoles();
    fetchMembers();
  }, []);

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

  useEffect(() => {
    if (roles && members) {
      setMembers(people);
    }
  }, [people]);

  if (!roles || !members)
    return (
      <>
        <p>Holis, awanta</p>
      </>
    );
  return <>{<CardBinder>{membersList()}</CardBinder>}</>;
};

Members.propTypes = {
  people: PropTypes.array,
};

Members.defaultProps = {
  people: null,
};

export default Members;
