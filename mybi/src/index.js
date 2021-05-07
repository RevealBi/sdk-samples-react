import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './msAuthConfig';
import { config } from './Constants'

const msalInstance = new PublicClientApplication(msalConfig);

const WebFont = window.WebFont;
const webfontCallback = status => {
  ReactDOM.render(
    <React.StrictMode>
      <MsalProvider instance={msalInstance}>
        <Router basename={config.routerBasename}>        
          <App/>
        </Router>        
      </MsalProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

WebFont.load({
  custom: {
      families: ['Roboto-Regular', 'Roboto-Bold', 'Roboto-Medium'] 
  },
  active: webfontCallback
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
