import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from "../assets/images/logo.png"

import "./Navbar.css"

const Navbar = () => {
  return (
  <div>
      <nav className="navbar navbar-expand-lg">
  <div className="container">
    <NavLink className="navbar-brand" to=""><img src={logo} className='img-fluid' alt="#"/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <NavLink  className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink  className="nav-link" to="/about">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink  className="nav-link" to="/services">Services</NavLink>
        </li>

        <li className="nav-item">
          <NavLink  className="nav-link" to="/contact">Gallery</NavLink>
        </li>

        <li className="nav-item">
          <NavLink  className="nav-link" to="/services">Blog</NavLink>
        </li>

        <li className="nav-item">
          <NavLink  className="nav-link" to="/services">Contact</NavLink>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
  </div>
  );
};

export default Navbar;
