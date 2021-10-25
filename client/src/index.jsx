import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import LoginPage from './pages/user/components/login/LoginPage';

import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
