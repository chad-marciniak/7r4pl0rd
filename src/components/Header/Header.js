import React from 'react';
import Logo from '../Logo/Logo';
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
