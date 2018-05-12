import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../Layout/Layout.js';
class AppShell extends Component { 
  render() {
     return(
       <div><Layout /></div> 
    );
  };
}

const App = connect(null, null)(AppShell);
export default App;
