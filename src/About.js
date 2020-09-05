import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function About() {
  return (
    <div className="about">
      <script src="https://kit.fontawesome.com/cd3884a346.js" crossorigin="anonymous"></script>
        <h1 className="title-page">About</h1>
        <div className="about-me">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, similique iste. Sint.
        </div>
        <div class="contact">
          {/* <img src={require(``)} alt=""> */}
          <FontAwesomeIcon icon={['fab','facebook-f']} size="2x" />
          <FontAwesomeIcon icon={['fab','instagram']} size="2x" />
          <FontAwesomeIcon icon={['fab','linkedin']} size="2x" />
          <FontAwesomeIcon icon={['fab','github']} size="2x" />
        </div>
    </div>
  );
}

export default About;
