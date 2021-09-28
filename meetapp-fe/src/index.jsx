import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import {HashRouter as Router} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Auth0ProviderWithHistory from "./auth/Auth0ProviderWithHistory.jsx";

// origin me redirecciona a donde estaba antes de loguearme
ReactDOM.render(
  <React.StrictMode>
    <Router history={createBrowserHistory} >  
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
//https://auth0.com/blog/complete-guide-to-react-user-authentication/

