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
            showHome={location.pathname === "/"}             
            title={"Dashboards"} 
          />
          <Switch>
            <Route path="/dashboard/:dashboardId">
              <DashboardView readOnly={true}/>
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
