import React from 'react';
import './App.css';

function Skills() {
  return (
      <div className="skills">
            <h1 className="title-page">Skills</h1>
            <div className="list-skills">
                <div class="skill-container">
                  <img className="skill-img" src={require(`./logo/html.png`)} alt="html"/>
                  <label className="skill-label">HTML</label>
                </div>
                <div class="skill-container">
                  <img className="skill-img" src={require(`./logo/css.png`)} alt="css"/>
                  <label className="skill-label">CSS</label>
                </div>
                <div class="skill-container">
                  {/* <img className="skill-img" src={require(`./logo/scss.png`)} alt="scss"/> */}
                  <label className="skill-label">SCSS/SASS</label>
                </div>
                <div class="skill-container">
                  <img className="skill-img" src={require(`./logo/js.png`)} alt="javascript"/>
                  <label className="skill-label">Javascript</label>
                </div>
                <div class="skill-container">
                  <img className="skill-img" src={require(`./logo/react.png`)} alt="reactjs"/>
                  <label className="skill-label">ReactJS</label>
                </div>
                <div class="skill-container">
                  <img className="skill-img" src={require(`./logo/git.png`)} alt="git"/>
                  <label className="skill-label">Git</label>
                </div>
                <div class="skill-container">
                  <img className="skill-img" src={require(`./logo/php.svg`)} alt="php"/>
                  <label className="skill-label">PHP</label>
                </div>
                <div class="skill-container">
                  <img className="skill-img" src={require(`./logo/mysql.png`)} alt="mysql"/>
                  <label className="skill-label">MySQL</label>
                </div>
                <div class="skill-container">
                  <img className="skill-img" src={require(`./logo/bootstrap.png`)} alt="bootstrap"/>
                  <label className="skill-label">Bootstrap</label>
                </div>
            </div>
      </div>
  );
}

export default Skills;
