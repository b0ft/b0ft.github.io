import React from 'react';
import '../css/main.css'

function Skills() {
  return (
      <div className="skills">
            <h1 className="skills__title">Skills</h1>
            <div className="skills__list">
                <div class="skill">
                  <img className="skill__img" src={require(`../img/logo/html.png`)} alt="html"/>
                  <label className="skill__label">HTML</label>
                </div>
                <div class="skill">
                  <img className="skill__img" src={require(`../img/logo/css.png`)} alt="css"/>
                  <label className="skill__label">CSS</label>
                </div>
                <div class="skill">
                  <img className="skill__img" src={require(`../img/logo/scss.svg`)} alt="scss"/>
                  <label className="skill__label">SCSS/SASS</label>
                </div>
                <div class="skill">
                  <img className="skill__img" src={require(`../img/logo/js.png`)} alt="javascript"/>
                  <label className="skill__label">Javascript</label>
                </div>
                <div class="skill">
                  <img className="skill__img" src={require(`../img/logo/react.png`)} alt="reactjs"/>
                  <label className="skill__label">ReactJS</label>
                </div>
                <div class="skill">
                  <img className="skill__img" src={require(`../img/logo/git.png`)} alt="git"/>
                  <label className="skill__label">Git</label>
                </div>
                <div class="skill">
                  <img className="skill__img" src={require(`../img/logo/php.svg`)} alt="php"/>
                  <label className="skill__label">PHP</label>
                </div>
                <div class="skill">
                  <img className="skill__img" src={require(`../img/logo/mysql.png`)} alt="mysql"/>
                  <label className="skill__label">MySQL</label>
                </div>
                <div class="skill">
                  <img className="skill__img" src={require(`../img/logo/bootstrap.png`)} alt="bootstrap"/>
                  <label className="skill__label">Bootstrap</label>
                </div>
            </div>
      </div>
  );
}

export default Skills;
