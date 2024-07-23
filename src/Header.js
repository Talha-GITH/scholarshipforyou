import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 
import { FaGraduationCap } from 'react-icons/fa'; 

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid header-container">
        {/* Logo */}
        <div className="header-logo">
          <Link to="/" className="navbar-brand">
            <FaGraduationCap className="education-icon" size={30} /> 
            <span className="logo-text">Scholarship<span style={{ color: 'red' }}>For</span>You</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/ScholarshipList" className="nav-link">All Scholarships</Link>
          <Link to="/Thanks" className="nav-link">Contact</Link>
        </div>       
      </div>
    </header>
  );
}

export default Header;
