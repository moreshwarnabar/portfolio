import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="flex size-10 items-center justify-center rounded-lg bg-white font-bold shadow-md"
      >
        <p className="blue-gradient_text">MN</p>
      </NavLink>
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
