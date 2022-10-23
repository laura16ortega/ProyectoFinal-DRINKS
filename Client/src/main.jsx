import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store/store.js';
import credentials from './auth_config.json';
import { Auth0Provider } from '@auth0/auth0-react';

/* const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
const CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID; */

console.log(window.location)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <Provider store={store}>
      <BrowserRouter>
      <Auth0Provider domain={credentials.domain} clientId={credentials.clientId}
    redirectUri={window.location.href} useRefreshTokens cacheLocation="localstorage">
        <App />
        </Auth0Provider>
      </BrowserRouter>
    </Provider>  

  </React.StrictMode>
);
