import React from 'react';
import { connect } from 'react-redux';
import Layout from '../Layout/Layout';

const AppShell = () => (
  <div>
    <Layout />
  </div>
);

const App = connect(
  null,
  null
)(AppShell);
export default App;
