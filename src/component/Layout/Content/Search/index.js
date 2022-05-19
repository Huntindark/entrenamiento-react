/*----- Core -----*/
import React, { useEffect, useState, useContext } from "react";
import CardBinder from "../../../Generic/CardBinder";
import Projects from "../Projects";
import Members from "../Members";
import PropTypes from "prop-types";
import { APIContext } from "../../../../contexts/APIStore";
import StyledContent from "../styles";

const Search = ({ filter }) => {
  const [query, setQuery] = useState(filter);
  const { state } = useContext(APIContext);

  useEffect(() => {
    setQuery(filter);
  }, [filter]);

  const projectsList = state.projects.filter(function (project) {
    return project.name.toLowerCase().includes(query);
  });

  const membersList = state.members.filter(function (member) {
    return (
      member.firstname.toLowerCase().includes(query) ||
      member.lastname.toLowerCase().includes(query) ||
      state.roles
        .find((item) => item.id == member.role_id)
        .label.toLowerCase()
        .includes(query)
    );
  });

  function handleInput(e) {
    setQuery(e.target.value.toLowerCase());
  }

  if (!state.projects || !state.members)
    return (
      <>
        <p>Holis, awanta</p>
      </>
    );
  return (
    <StyledContent>
      <p>Pagina de Busqueda</p>
      <label>Que desea buscar?</label>
      <input onChange={handleInput} value={query}></input>
      <CardBinder>
        <Projects filteredProjects={projectsList} />
        <Members people={membersList} />
      </CardBinder>
    </StyledContent>
  );
};

Search.propTypes = {
  filter: PropTypes.string,
};

Search.defaultProps = {
  filter: "",
};

export default Search;
