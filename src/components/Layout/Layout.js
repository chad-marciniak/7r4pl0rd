import React from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import './Layout.css';

const Layout = () => (
  <div className="layout">
    <div className="outer-layout">
      <div className="inner-layout">
        <Header />
        <Nav />
      </div>
    </div>
  </div>
);

export default Layout;
