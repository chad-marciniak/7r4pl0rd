import React, { Component } from 'react';
import { connect } from 'react-redux';

class AppShell extends Component { 
  render() {
    return(
      <div> im the app </div>
    );
  };
}

const App = connect(null, null)(AppShell);
export default App;
