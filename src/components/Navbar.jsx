import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBriefcase, FaUserPlus, FaListAlt, FaInfoCircle, FaExclamationTriangle } from "react-icons/fa";
import "../styles/Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo-container">
        <img src="/D1.png" alt="Job Portal Logo" className="logo-img" /> 
       
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/"><FaHome className="icon" /> Home</Link></li>
        <li><Link to="/jobs"><FaBriefcase className="icon" /> Jobs</Link></li>
        <li><Link to="/apply"><FaUserPlus className="icon" /> Apply</Link></li>
        <li><Link to="/applied-jobs"><FaListAlt className="icon" /> Applied Jobs</Link></li>
        <li><Link to="/about"><FaInfoCircle className="icon" /> About</Link></li>
        <li><Link to="/error"><FaExclamationTriangle className="icon" /> Error</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
