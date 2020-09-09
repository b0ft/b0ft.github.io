import React from 'react';
import '../css/main.css'

function Project() {
  return (
    <div className="projects">
        <h1 className="projects__title">Projects</h1>
        <div className="projects__list">
            <div class="project">
                <img className="project__img" src={require(`../img/headphone.png`)} alt="html"/>
                <label className="project__label">e-Commerce Headphone</label>
                <ul className="project__languages">
                <li className="project__language">HTML</li>
                <li className="project__language">CSS</li>
                <li className="project__language">JavaScript</li>
                </ul>
                <a href="https://ecommerce-headphone.netlify.app/" className="project__visit"><div className="project__site">Visit</div></a>
            </div>
            <div class="project">
                <img className="project__img" src={require(`../img/smartphone.png`)} alt="html"/>
                <label className="project__label">e-Commerce Smartphone</label>
                <ul className="project__languages">
                <li className="project__language">HTML</li>
                <li className="project__language">CSS</li>
                <li className="project__language">JavaScript</li>
                <li className="project__language">ReactJS</li>
                </ul>
                <a href="https://ecommerce-smartphone.netlify.app/" className="project__visit"><div className="project__site">Visit</div></a>
            </div>
            {/* <div class="project">
                <img className="project__img" src={require(`../img/logo/html.png`)} alt="html"/>
                <label className="project__label">Online Voting App</label>
                <ul className="project__languages">
                <li className="project__language">HTML</li>
                <li className="project__language">CSS</li>
                <li className="project__language">PHP</li>
                <li className="project__language">MySQL</li>
                </ul>
                <h5 className="project__visit"><div className="project__site">Visit</div></h5>
            </div>
            <div class="project">
                <img className="project__img" src={require(`../img/logo/html.png`)} alt="html"/>
                <label className="project__label">Class Picket</label>
                <ul className="project__languages">
                <li className="project__language">HTML</li>
                <li className="project__language">CSS</li>
                <li className="project__language">PHP</li>
                <li className="project__language">MySQL</li>
                </ul>
                <h5 className="project__visit"><div className="project__site">Visit</div></h5>
            </div> */}
        </div>
    </div>
  );
}

export default Project;
