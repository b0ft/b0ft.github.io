import React from 'react';
import '../css/main.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="nav">
        <ul className="nav__links">
          <Link to="/" className="nav__link">
            <li>Home</li>
          </Link>
          <Link to="/skills" className="nav__link">
            <li>Skills</li>
          </Link>
          <Link to="/projects" className="nav__link">
            <li>Projects</li>
          </Link>
          <Link to="/about" className="nav__link">
            <li>About</li>
          </Link>
        </ul>
    </nav>
  );
}

export default Navbar;
