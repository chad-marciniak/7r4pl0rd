import React, { Component } from 'react';
import Button from '../Button/Button.js';
import './Nav.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleNav, setLocation } from '../../actions/nav.js';

class NavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // this should be passed down from the reducer
      buttons: [],
      buttonArray: [
        { name: 'contact', link: '/', data: { page: 'contact' } },
        { name: 'mission', link: '/', data: { page: 'mission' } },
        { name: 'archives', link: '/', data: { page: 'archives' } },
        { name: 'main', link: '/', data: { page: 'main' } }
      ]
    };
  }

  // checkout new react component methods this is no longer
  componentDidMount() {
    // for (let i = 0, ln = this.state.buttonArray.length; i < ln; i++) {
    //   setTimeout(
    //     x => {
    //       this.setState({
    //         buttons: [...this.state.buttons, this.state.buttonArray[x]]
    //       });
    //     },
    //     1000 * i,
    //     i
    //   );
    // }
  }

  render() {
    const links = this.state.buttonArray.map((button, key) => (
      <Button
        key={key}
        text={button.name}
        action={this.props.setLocation}
        name={button.name}
        data={button.data.page}
      />
    ));

    return (
      <div className="nav-container">
        <Button
          name="hamburger"
          action={this.props.toggleNav}
          data={!this.props.open}
        />
        {links}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    open: state.nav.open
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleNav, setLocation }, dispatch);

const Nav = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavComponent);
export default Nav;
