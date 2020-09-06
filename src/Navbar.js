import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
        <ul className="nav-links">
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <Link to="/skills" className="nav-link">
            <li>Skills</li>
          </Link>
          <Link to="/project" className="nav-link">
            <li>Project</li>
          </Link>
          <Link to="/about" className="nav-link">
            <li>About</li>
          </Link>
        </ul>
    </nav>
  );
}

export default Navbar;
