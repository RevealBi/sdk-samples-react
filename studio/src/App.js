import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import DashboardsRepository from './components/DashboardsRepository';
import { DashboardView } from './components/DashboardView';
import { config } from './Constants';
import AppHeader from './components/AppHeader';

const RevealApi = window.RevealApi;

function App() {  
  const history = useHistory();
  const location = useLocation();
  RevealApi.RevealSdkSettings.setBaseUrl(config.url.REVEAL_API_URL);

  const openDashboard = (dashboardId) => {
    history.push("/dashboard/" + dashboardId)
  }
  return (
      <div className="App">
          <AppHeader 
            isHome={location.pathname === "/"}             
            title={location.pathname === "/" ? "Dashboards" : ""} 
          />
          <Switch>
            <Route path="/dashboard/:dashboardId">
              <DashboardView readOnly={false}/>
            </Route>
            <Route path="/dashboard/newdashboard">
              <DashboardView readOnly={false}/>
            </Route>
            <Route path="/">
              <div className="Dashboards-grid">
                <DashboardsRepository             
                  onOpenDashboard={openDashboard} 
                />
              </div>
            </Route>
          </Switch>
      </div>
  );
}

export default App;
