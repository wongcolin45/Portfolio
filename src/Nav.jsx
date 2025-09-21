import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar">
    <ul>
    
      <li>
        <Link to="/">About</Link>
      </li>

      <li>
        <Link to="/experience">Experience</Link>
      </li>

      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/resume">Resume</Link>
      </li>


    </ul>
  </nav>
);

export default Nav;