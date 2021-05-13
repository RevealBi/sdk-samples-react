import React, { useEffect, useState } from 'react';
import './App.css';

declare global {
  interface Window {
    $: any;
  }
}

const $ = window.$;
const baseUrl = "https://localhost:44301/";

$.ig.RevealSdkSettings.setBaseUrl(baseUrl);

function App() {

  const themes: string[] = ["Mountain Light Theme", "Mountain Dark Theme", "Ocean Light Theme", "Ocean Dark Theme", "Custom Theme"];

  const [dashboardNames, setDashboardNames] = useState<string[]>([]);
  const [selectedDashboard, setSelectedDashboard] = useState<string>("");

  useEffect(() => {
    fetch(baseUrl + "Dashboards/Names")
      .then(data => data.json())
      .then(json => {
        setDashboardNames(json)
        loadDashboard(json[0]);
    });
  }, []);

  const selectDashboard = (name: string) => {
    setSelectedDashboard(name);
    loadDashboard(name);
  }

  const loadDashboard = (name: string) => {
    $.ig.RevealUtility.loadDashboard(name, (dashboard: any) => {
      let revealView = new $.ig.RevealView("#revealView");
      revealView.canSave = false;
      revealView.canSaveAs = false;
      revealView.dashboard = dashboard;
    }, (error: any) => console.log(error));
  }

  const changeTheme = (event: any) => {
    const selectedTheme = event.target.value;
    switch (selectedTheme)
    {
      case "Mountain Light Theme":
        $.ig.RevealSdkSettings.theme = new $.ig.MountainLightTheme();
        break;
      case "Mountain Dark Theme":
        $.ig.RevealSdkSettings.theme = new $.ig.MountainDarkTheme();
        break;
      case "Ocean Light Theme":
        $.ig.RevealSdkSettings.theme = new $.ig.OceanLightTheme();
        break;
      case "Ocean Dark Theme":
        $.ig.RevealSdkSettings.theme = new $.ig.OceanDarkTheme();
        break;
      case "Custom Theme":
        $.ig.RevealSdkSettings.theme = createCustomTheme();
        break;
    }

    loadDashboard(selectedDashboard);
  }

  const createCustomTheme = () => {
    var revealTheme = new $.ig.RevealTheme();
    revealTheme.chartColors = ["rgb(192, 80, 77)", "rgb(101, 197, 235)", "rgb(232, 77, 137)"];    
    revealTheme.mediumFont = "Gabriola";
    revealTheme.boldFont = "Comic Sans MS";
    revealTheme.fontColor = "rgb(31, 59, 84)";
    revealTheme.accentColor = "rgb(192, 80, 77)";
    revealTheme.dashboardBackgroundColor = "rgb(232, 235, 252)";
    return revealTheme;
  }

  return (
    <div className="container">
      <div className="column">
        <select onChange={changeTheme} style={{margin: "25px"}}>
          {themes.map(theme => (<option key={theme}>{theme}</option>))}
        </select>
        <ul className="dashboardList">
          {dashboardNames?.map(d => (<li key={d} onClick={() => selectDashboard(d)}>{d}</li>))}
        </ul>
      </div>
      <div id="revealView"></div>
    </div>
  );
}

export default App;
