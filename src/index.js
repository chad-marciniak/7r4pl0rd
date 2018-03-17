import React from 'react';
import { render }  from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './public/css/index.css';
import App from './components/App/App.js';
// import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

// registerServiceWorker();
