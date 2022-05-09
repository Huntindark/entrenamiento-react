/*----- Core -----*/
import React, { useState } from "react";
import { CardBinder } from "../../../Styles/CardBinder";
import MemberCard from "../Members/card";
import ProjectCard from "../Projects/card";
import { data } from "../../../../utils/data"
import { nanoid } from "nanoid";

const Proyects = () => {
  const [query, setQuery] = useState('')
  const projects = data.projects
  const members = data.members
  const roles = data.roles
  
  const projectsList = projects.filter( function(project) {
    return project.name.toLowerCase().includes(query.toLowerCase())
  });

  const projectsComponentList = projectsList.map(project => (
    <ProjectCard id={nanoid()} name={project.name} img={project.img} stack={project.stack} key ={nanoid()}/>
  ));

  const membersList = members.filter( function(member) {
    return member.firstname.toLowerCase().includes(query.toLowerCase()) || member.lastname.toLowerCase().includes(query.toLowerCase()) || roles.find(item => item.id==member.role_id).label.toLowerCase().includes(query.toLowerCase())
  });

  const membersComponentList = membersList.map(member => (
    <MemberCard id={nanoid()} firstName={member.firstname} lastName={member.lastname} role={roles.find(item => item.id==member.role_id).label} key ={nanoid()}/>
  ));

  function handleInput(e) {
    setQuery(e.target.value)
  }

  return (
    <>
      <p>Pagina de Busqueda</p>
      <label>Que desea buscar?</label>
      <input onKeyUp={handleInput}></input>
      <CardBinder>
        {projectsComponentList}
      </CardBinder>
      <CardBinder>
        {membersComponentList}
      </CardBinder>
    </>
  );
};

export default Proyects;
