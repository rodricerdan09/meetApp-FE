import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { Auth0Provider } from "@auth0/auth0-react";

const domain=process.env.REACT_APP_AUTH0_DOMAIN;
const client=process.env.REACT_APP_AUTH0_CLIENT_ID;
// origin me redirecciona a donde estaba antes de loguearme
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider 
      domain={domain} 
      client={client}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


