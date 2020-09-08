import React from 'react';
import './App.css';

function Project() {
  return (
    <div className="projects">
      <h1 className="title-page">Projects</h1>
      <div className="list-projects">
        <div class="project-container">
          <img className="project-img" src={require(`./logo/html.png`)} alt="html"/>
          <label className="project-label">HTML</label>
        </div>
        <div class="project-container">
          <img className="project-img" src={require(`./logo/html.png`)} alt="html"/>
          <label className="project-label">HTML</label>
        </div>
        <div class="project-container">
          <img className="project-img" src={require(`./logo/html.png`)} alt="html"/>
          <label className="project-label">HTML</label>
        </div>
      </div>
    </div>
  );
}

export default Project;
