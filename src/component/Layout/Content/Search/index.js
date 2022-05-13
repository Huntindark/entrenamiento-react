// /*----- Core -----*/
// import React, { useEffect, useState } from "react";
// import { CardBinder } from "../../../Styles/CardBinder";
// import { data } from "../../../../utils/data";
// import Projects from "../Projects";
// import Members from "../Members";
// import PropTypes from "prop-types";

// const Search = ({ filter }) => {
//   const [query, setQuery] = useState(filter);
//   const projects = data.projects;
//   const members = data.members;
//   const roles = data.roles;

//   useEffect(() => {
//     setQuery(filter);
//   }, [filter]);

//   const projectsList = projects.filter(function (project) {
//     return project.name.toLowerCase().includes(query);
//   });

//   const membersList = members.filter(function (member) {
//     return (
//       member.firstname.toLowerCase().includes(query) ||
//       member.lastname.toLowerCase().includes(query) ||
//       roles
//         .find((item) => item.id == member.role_id)
//         .label.toLowerCase()
//         .includes(query)
//     );
//   });

//   function handleInput(e) {
//     setQuery(e.target.value.toLowerCase());
//   }

//   return (
//     <>
//       <p>Pagina de Busqueda</p>
//       <label>Que desea buscar?</label>
//       <input onChange={handleInput} value={query}></input>
//       <CardBinder>
//         <Projects projects={projectsList} />
//         <Members people={membersList} />
//       </CardBinder>
//     </>
//   );
// };

// Search.propTypes = {
//   filter: PropTypes.string,
// };

// Search.defaultProps = {
//   filter: "",
// };

// export default Search;
