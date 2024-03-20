// src/components/NavBar.js
import React from 'react';
import { FaSignInAlt } from 'react-icons/fa'; 
import '../App.css'; 

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">ExpenseBuddy</div>
      <div className="menu-items">
        <a href="/login"><FaSignInAlt /> Login</a>
      </div>
    </nav>
  );
};

