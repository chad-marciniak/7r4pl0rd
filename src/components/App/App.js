import React from 'react';
import { connect } from 'react-redux';
import Layout from '../Layout/Layout';

const AppShell = () => <Layout />;
const App = connect(
  null,
  null
)(AppShell);
export default App;
