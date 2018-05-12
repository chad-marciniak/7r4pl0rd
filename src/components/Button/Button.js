import React, { Component } from 'react';
import { connect } from 'react-redux';
import ButtonView from './ButtonView.js';
// import { pushClickData }  '
import './Button.css';

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      hover: false,
    };
    this.buttonHover = this.buttonHover.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.buttonBlur = this.buttonBlur.bind(this);
  };
  buttonHover(e) {
    //   this.setState({ active: 'hover' });
  }
  
  buttonBlur(e) {
    //   this.setState({ active: 'blur' });
  }
 
  buttonClick(e) {
    if (this.state.active === 'active') {
      this.setState({ active: false });
    } else {
      this.setState({ active: 'active' });
    }
  }

  render() {
    return (<ButtonView onBlur={this.buttonBlur} onHover={this.buttonHover} onClick={this.buttonClick} name={this.props.name} active={this.state.active} />);
  }
}

const Button = connect (null, null)(ButtonComponent);
export default Button;
