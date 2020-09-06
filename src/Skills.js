import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function Skills() {
  return (
      <div className="skills">
            <h1 className="title-page">Skills</h1>
            <div className="list-skills">
                <div class="skill-container">
                  <img className="skill-img" src={require(`./logo/html.png`)} />
                  <label className="skill-label">HTML</label>
                </div>
                <div class="skill-container">
                  <img className="skill-img" src={require(`./logo/css.png`)} />
                  <label className="skill-label">CSS</label>
                </div>
                <div class="skill-container">
                  <img className="skill-img" src={require(`./logo/js.png`)} />
                  <label className="skill-label">Javascript</label>
                </div>
                <div class="skill-container">
                  <img className="skill-img" src={require(`./logo/php.svg`)} />
                  <label className="skill-label">PHP</label>
                </div>
                <div class="skill-container">
                  <img className="skill-img" src={require(`./logo/mysql.png`)} />
                  <label className="skill-label">MySQL</label>
                </div>
                <div class="skill-container">
                  <img className="skill-img" src={require(`./logo/bootstrap.png`)} />
                  <label className="skill-label">Bootstrap</label>
                </div>
                <div class="skill-container">
                  <img className="skill-img" src={require(`./logo/git.png`)} />
                  <label className="skill-label">Git</label>
                </div>
                <div class="skill-container">
                  <img className="skill-img" src={require(`./logo/react.png`)} />
                  <label className="skill-label">ReactJS</label>
                </div>
            </div>
      </div>
  );
}

export default Skills;
