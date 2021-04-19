import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, useHistory, useLocation } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import { PrivateRoute } from './components/PrivateRoute';
import { AuthenticationContext } from './context/authentication';

import { DashboardsRepository } from './components/DashboardsRepository';
import { DashboardView } from './components/DashboardView';
import { Admin } from './pages/Admin';
import homeicon from './images/home-icon.svg';
import plusicon from './images/plus-icon.svg';
import logouticon from './images/logout-icon.svg';
import { config } from './Constants';
import Login from './pages/Login';
import Logout from './pages/Logout';

const $ = window.$;

function App() {  
  const history = useHistory();
  const location = useLocation();
  const [authentication, ] = useState({ isAuthenticated: false, userId: null, fullName: null })

  $.ig.RevealSdkSettings.setBaseUrl(config.url.REVEAL_API_URL);

  const openDashboard = (dashboardId) => {
    history.push("/dashboard/" + dashboardId)
  }

  return (
      <div className="App">
        <header className="App-Header">
          { location.pathname !== "/" && <Link id="home_link" to="/" className="App-Header-Home-Link"><img alt="Home" src={homeicon}/></Link>}
          { location.pathname === "/login" ? <span className="App-Header-Title">Login</span> : <span className="App-Header-Title">Dashboards</span> }
          { location.pathname === "/" && <Link id="newdashboard_link" to="/newdashboard" className="App-Header-NewDashboard-Link"><img alt="New Dashboard" src={plusicon}/></Link>}
          { location.pathname === "/" && <Link id="logout_link" to="/logout" className="App-Header-Logout-Link"><img alt="Logout" src={logouticon}/></Link>}
        </header>
        <AuthenticationContext.Provider value={ authentication }>
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
            <PrivateRoute path="/admin" component={Admin} message="Welcome!"/>
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/">
              <div className="Dashboards-grid">
                <DashboardsRepository onOpenDashboard={openDashboard}/>
              </div>
            </Route>
          </AnimatedSwitch>
        </AuthenticationContext.Provider>
      </div>
  );
}

export default App;
