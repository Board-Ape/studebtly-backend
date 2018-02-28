import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
      <div className='header-container'>
        <p><Link className='nav-links' to='/'>Home</Link></p>
        <p><Link className='nav-links' to='/api/v1/colleges'>Colleges</Link></p>
      </div>
    </header>
  );
};

export default NavBar;
