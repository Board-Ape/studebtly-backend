import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
import App from './components/App/App';
import { Provider } from 'react-redux';
import Store from './Store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store = { Store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

Provider.propTypes = {
  store: PropTypes.object
};
