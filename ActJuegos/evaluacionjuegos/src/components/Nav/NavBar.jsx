import React from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-left">
         <img src={logo} style={{ width: '180px', height: '90px', backgroundColor: 'red' }} />

        </div>
        <div className="navbar-right">
          <span className="email">davidgranados@gmail.com</span>
          <div className="divider" />
          <div className="socials">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-whatsapp"></i>
          </div>
          <div className="divider" />
          <span className="label">David Gaming!</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

