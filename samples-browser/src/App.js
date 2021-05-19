import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import { DashboardsListStateContext } from './context/dashboardsListState';

const $ = window.$;

function App() {  
  const history = useHistory();
  const location = useLocation();
  const [authentication, setAuthentication] = useState({ isAuthenticated: false, userId: null, fullName: null });
  const [dashboardsListState, setDashboardsListState] = useState({ dirty: true });
  const [knownAuthenticationStatus, setKnownAuthenticationStatus] = useState(false);
  $.ig.RevealSdkSettings.setBaseUrl(config.url.REVEAL_API_URL);

  const openDashboard = (dashboardId) => {
    history.push("/dashboard/" + dashboardId)
  }

  const reloadDashboards = () => {
    setDashboardsListState({dirty: true});
  }

  const reloadDashboardsFinished = (dashboards) => {
    setDashboardsListState({dirty: false, dashboards: dashboards});
  }

  const loggedOut = () => {    
    setAuthentication({ isAuthenticated: false, userId: null, fullName: null });
    reloadDashboards();
  }

  const dashboardSaved = () => {
    reloadDashboards();
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
        <DashboardsListStateContext.Provider value={ dashboardsListState }>
          <AppHeader 
            showHome={location.pathname === "/"}             
            title={location.pathname === "/login" ? "Login" : "Dashboards"} 
            canCreate={authentication.isAuthenticated}
            canUpload={authentication.isAuthenticated}
            isAuthenticated={authentication.isAuthenticated}
            onReload={reloadDashboards}/>
          <Switch>
            <Route path="/dashboard/:dashboardId">
              <DashboardView readOnly={!authentication.isAuthenticated} onDashboardSaved={dashboardSaved}/>
            </Route>
            <Route path="/newdashboard">
              <DashboardView readOnly={!authentication.isAuthenticated}/>
            </Route>
            <PrivateRoute path="/admin" component={Admin} message="Welcome!"/>
            <Route path="/login" component={Login} />
            <Route path="/logout">
              <Logout onLogout={loggedOut}/>
            </Route>
            <Route path="/">
              <div className="Dashboards-grid">
                <DashboardsRepository onReload={reloadDashboards} onReloadFinished={reloadDashboardsFinished} onOpenDashboard={openDashboard} readOnly={!authentication.isAuthenticated}/>
              </div>
            </Route>
          </Switch>
        </DashboardsListStateContext.Provider>
        </AuthenticationContext.Provider>
      </div>
  );
}

export default App;
