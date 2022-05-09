/*----- Core -----*/
import React, { useState } from "react";
import { CardBinder } from "../../../Styles/CardBinder";
// import MemberCard from "../Members/card";
// import ProjectCard from "../Projects/card";
import { data } from "../../../../utils/data";
// import { nanoid } from "nanoid";
import Projects from "../Projects";
import Members from "../Members";

const Proyects = () => {
  const [query, setQuery] = useState("");
  const projects = data.projects;
  const members = data.members;
  const roles = data.roles;

  const projectsList = projects.filter(function (project) {
    return project.name.toLowerCase().includes(query);
  });

  // const projectsComponentList = projectsList.map((project) => (
  //   <ProjectCard
  //     id={nanoid()}
  //     name={project.name}
  //     img={project.img}
  //     stack={project.stack}
  //     key={nanoid()}
  //   />
  // ));

  const membersList = members.filter(function (member) {
    return (
      member.firstname.toLowerCase().includes(query) ||
      member.lastname.toLowerCase().includes(query) ||
      roles
        .find((item) => item.id == member.role_id)
        .label.toLowerCase()
        .includes(query)
    );
  });

  // const membersComponentList = membersList.map((member) => (
  //   <MemberCard
  //     id={nanoid()}
  //     firstName={member.firstname}
  //     lastName={member.lastname}
  //     role={roles.find((item) => item.id == member.role_id).label}
  //     key={nanoid()}
  //   />
  // ));

  function handleInput(e) {
    setQuery(e.target.value.toLowerCase());
  }

  return (
    <>
      <p>Pagina de Busqueda</p>
      <label>Que desea buscar?</label>
      <input onChange={handleInput} value={query}></input>
      <CardBinder>
        {/* {projectsComponentList} */}
        <Projects projects={projectsList} />
        {/* {membersComponentList} */}
        <Members members={membersList} />
      </CardBinder>
    </>
  );
};

export default Proyects;
