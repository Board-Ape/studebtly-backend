import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <header className='header'>
      <div className='header-container'>
        <Link className='nav-links' to='/'><img className='navbar-icon' src={require('./money-icon.png')} alt="Location icon png"/></Link>
      </div>
    </header>
  );
};

export default NavBar;
