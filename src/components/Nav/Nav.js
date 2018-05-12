import React, { Component } from 'react';
import Button from '../Button/Button.js';
import './Nav.css';
import { connect } from 'react-redux';

class NavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      buttons: [
        { name: 'contact', link: '/' },
        { name: 'mission', link: '/' }, 
        { name: 'archives', link: '/' },
        { name: 'main', link: '/' },
      ],
    };
  };
  
  render() {
    return (
      <div className="nav-container">
        <Button name='hamburger' />
      </div>
    );
  }

}

const Nav = connect (null, null)(NavComponent);
export default Nav;
