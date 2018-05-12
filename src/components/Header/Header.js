import React from 'react';
import Logo from '../Logo/Logo.js';
import './Header.css';

const Header = () => (
  <div className="header">
    <div className="logo">  
      <Logo />
    </div>
    <div className="horizontal-rule" />
  </div>
);

export default Header;
