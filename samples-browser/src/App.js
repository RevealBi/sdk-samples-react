import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
// import { AnimatedSwitch } from 'react-router-transition';
import { PrivateRoute } from './components/PrivateRoute';
import { AuthenticationContext } from './context/authentication';

import DashboardsRepository from './components/DashboardsRepository';
import { DashboardView } from './components/DashboardView';
import { Admin } from './pages/Admin';

import { config } from './Constants';
import Login from './pages/Login';
import Logout from './pages/Logout';
import AppHeader from './components/AppHeader';
import { backend } from './backend/Backend';

const RevealApi = window.RevealApi;

function App() {  
  const history = useHistory();
  const location = useLocation();
  const [authentication, setAuthentication] = useState({ isAuthenticated: false, userId: null, fullName: null });
  const [knownAuthenticationStatus, setKnownAuthenticationStatus] = useState(false);
  RevealApi.RevealSdkSettings.setBaseUrl(config.url.REVEAL_API_URL);

  const openDashboard = (dashboardId) => {
    history.push("/dashboard/" + dashboardId)
  }

  const loggedOut = () => {    
    setAuthentication({ isAuthenticated: false, userId: null, fullName: null });
  }

  useEffect(() => {
    let ignored = false;
    backend.checkAuthentication(authentication, () => {
      if (!ignored) {
        setKnownAuthenticationStatus(true);
      }
    },
    () => {
      if (!ignored) {
        setKnownAuthenticationStatus(true);
      }
    });
    return () => ignored = true;
  }, [authentication])

  return (
      knownAuthenticationStatus &&
      <div className="App">
        <AuthenticationContext.Provider value={ authentication }>
          <AppHeader 
            showHome={location.pathname === "/"}             
            title={location.pathname === "/login" ? "Login" : "Dashboards"} 
            isAuthenticated={authentication.isAuthenticated}
          />
          <Switch>
            <Route path="/dashboard/:dashboardId">
              <DashboardView readOnly={!authentication.isAuthenticated}/>
            </Route>
            <Route path="/newdashboard">
              <DashboardView readOnly={!authentication.isAuthenticated}/>
            </Route>
            <PrivateRoute path="/admin" component={Admin} message="Welcome!"/>
            <Route path="/login" component={Login} />
            <Route path="/logout">
              <Logout onLogout={loggedOut}/>
            </Route>
            <Route path="/tag/:tagId">
              <div className="Dashboards-grid">
                <DashboardsRepository             
                  onOpenDashboard={openDashboard} 
                  readOnly={!authentication.isAuthenticated}
                />
              </div>
            </Route>
            <Route path="/">
              <div className="Dashboards-grid">
                <DashboardsRepository             
                  onOpenDashboard={openDashboard} 
                  readOnly={!authentication.isAuthenticated}
                />
              </div>
            </Route>
          </Switch>
        </AuthenticationContext.Provider>
      </div>
  );
}

export default App;
