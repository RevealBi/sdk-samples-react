import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Linking } from "./components/Linking";
import { Filters } from "./components/Filters";
import { CreateDashboard } from "./components/CreateDashboard";

import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/filters" component={Filters} />
        <Route path="/linking" component={Linking} />
        <Route path="/createDashboard" component={CreateDashboard} />
      </Layout>
    );
  }
}
