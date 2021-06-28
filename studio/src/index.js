import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { config } from './Constants'

const WebFont = window.WebFont;
const webfontCallback = status => {
  ReactDOM.render(
    <React.StrictMode>
      <Router basename={config.routerBasename}>        
        <App/>
      </Router>        
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
