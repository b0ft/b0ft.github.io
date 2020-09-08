import React from 'react';
import '../css/main.css'

function Project() {
  return (
<div className="projects">
            <h1 className="projects__title">Projects</h1>
            <div className="projects__list">
                <div class="project">
                  <img className="project__img" src={require(`../img/logo/html.png`)} alt="html"/>
                  <label className="project__label">HTML</label>
                </div>
            </div>
      </div>
  );
}

export default Project;
