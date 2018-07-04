import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './css/index.css';
import App from './components/App/App';
// import registerServiceWorker from './registerServiceWorker';

if (typeof window !== 'undefined') {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

// registerServiceWorker();
