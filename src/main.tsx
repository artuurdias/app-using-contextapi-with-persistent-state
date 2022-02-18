import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyles from './styles/GlobalStyles';

import App from './App/App';

import UserProvider from './contexts/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);