import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  console.log(ProjectItem)
  const newProjects = projects.map((element)=>{
    return <ProjectItem name={element.name} key={element.id} about={element.about} technologies={element.technologies}/>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{newProjects}</div>
    </div>
  );
}

export default ProjectList;
