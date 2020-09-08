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
        <h1 className="title-page">About Me</h1>
        <img src={require('./square.jpg')} alt="aldy syachranie" className="img-about" />
        <div className="about-me">
          <p>
            When I was still in Junior High School, i decided to become a Programmer since then. 
            Why is that? Because I love playing games since I was a kid and began to use computer when I was 4th grade.
            And what is the relation of playing games and want to become a programmer?
            So when I was a kid, I used to go to Internet Cafe and do anything like browsing, playing games and etc. 
            And after so many years, my typing skills is keep improving.
            Back then when I was in Junior High School, I wanted to use my typing skills to make something out of it.
            And so, here I am.
          </p><br />
          <p>
            Back to the topic.
            The first thing I did to ensure myself to become a Programmer is to enter a school that are related to it.
            That is a Vocational High School with a Software Engineering major.
            After successfully enter the school that I wanted, I learned so many programming language from my High School.
            But the only one I'm really interested in is Web Development.
            After successfully created my first website using HTML and CSS in 10th grade, i decided to become a Web Developer.
          </p>          
        </div>
        <div class="contacts">
          <h4 className="contacts-title">You can find me below here!</h4>
          <a href="https://facebook.com/aldysr" className="contact">
            <FontAwesomeIcon icon={['fab','facebook']} size="2x" />
          </a>
          <a href="https://instagram.com/aldysych" className="contact" >
            <FontAwesomeIcon icon={['fab','instagram']} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/aldy-syachranie-b8549b1ab/" className="contact">
            <FontAwesomeIcon icon={['fab','linkedin']} size="2x" />
          </a>
          <a href="https://github.com/b0ft" className="contact" >
            <FontAwesomeIcon icon={['fab','github']} size="2x" />
          </a>
        </div>
    </div>
  );
}

export default About;
