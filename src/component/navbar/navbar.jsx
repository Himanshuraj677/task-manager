import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-title">LinkShortener</h1>
          <ul className="navbar-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/link/track">Track Link</Link></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default NavBar;
