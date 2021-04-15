import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import homeicon from './images/home-icon.svg';
import plusicon from './images/plus-icon.svg'
import { DashboardsRepository } from './components/DashboardsRepository'
import { DashboardView } from './components/DashboardView'
import { Route, Link, useHistory, useLocation } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { config } from './Constants';
const $ = window.$;

function App() {  
  const history = useHistory();
  const location = useLocation();

  $.ig.RevealSdkSettings.setBaseUrl(config.url.REVEAL_API_URL);

  const openDashboard = (dashboardId) => {
    history.push("/dashboard/" + dashboardId)
  }

  return (
      <div className="App">
        <header className="App-Header">
          { location.pathname != "/" && <Link id="home_link" to="/" className="App-Header-Home-Link"><img src={homeicon}/></Link>}          
          <span className="App-Header-Title">Dashboards</span>
          { location.pathname == "/" && <Link id="newdashboard_link" to="/newdashboard" className="App-Header-NewDashboard-Link"><img src={plusicon}/></Link>}          
        </header>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route path="/dashboard/:dashboardId">
            <DashboardView/>
          </Route>
          <Route path="/newdashboard">
            <DashboardView/>
          </Route>
          <Route path="/">
            <div className="Dashboards-grid">
              <DashboardsRepository onOpenDashboard={openDashboard}/>
            </div>
          </Route>
        </AnimatedSwitch>
      </div>
  );
}

export default App;
