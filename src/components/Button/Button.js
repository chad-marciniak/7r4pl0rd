import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ButtonView from './ButtonView.js';
import store from '../../store.js';
import { bindActionCreators } from 'redux';
import { toggleNav } from '../../actions/nav.js';
import './Button.css';

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
      hover: false
    };
    this.buttonHover = this.buttonHover.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.buttonBlur = this.buttonBlur.bind(this);
  }
  buttonHover(e) {
    //   this.setState({ active: 'hover' });
  }

  buttonBlur(e) {
    //   this.setState({ active: 'blur' });
  }

  buttonClick(e) {
    this.props.action(this.props.data);
    this.state.active === 'active'
      ? this.setState({ active: '' })
      : this.setState({ active: 'active' });
  }

  render() {
    return (
      <ButtonView
        onBlur={this.buttonBlur}
        onHover={this.buttonHover}
        onClick={this.buttonClick}
        name={this.props.name}
        text={this.props.text}
        active={this.state.active}
      />
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleNav }, dispatch);
const Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonComponent);
Button.PropTypes = {
  pushClickData: PropTypes.function
};
export default Button;
