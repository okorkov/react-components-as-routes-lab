import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to='/' exact style={{padding: '10px'}}>Home</NavLink>
      <NavLink to='/movies' exact style={{padding: '10px'}}>Movies</NavLink>
      <NavLink to='/actors' exact style={{padding: '10px'}}>Actors</NavLink>
      <NavLink to='/directors' exact style={{padding: '10px'}}>Directors</NavLink>
    </div>
  );
};

export default NavBar;
