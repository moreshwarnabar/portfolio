import React from 'react';
import { NavLink } from 'react-router-dom';
import { github, linkedin } from '../assets/icons';

const Navbar = () => {
  return (
    <header className="header">
      <div className="flex">
        <NavLink
          to="/"
          className="flex size-10 items-center justify-center rounded-lg bg-white font-bold shadow-md"
        >
          <p className="blue-gradient_text">MN</p>
        </NavLink>
        <NavLink
          to="https://github.com/moreshwarnabar"
          className="flex size-10 items-center justify-center rounded-lg bg-white font-bold shadow-md sm:mx-8 mx-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github" className="w-2/3 h-2/3" />
        </NavLink>
        <NavLink
          to="https://www.linkedin.com/in/moreshwar-rajan-nabar"
          className="flex size-10 items-center justify-center rounded-lg bg-white font-bold shadow-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
        </NavLink>
      </div>
      <nav className="flex gap-7 text-lg font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-black'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-black'
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
