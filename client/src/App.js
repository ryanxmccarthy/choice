import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Choice from "./pages/Choice";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Dashboard from './components/Dashboard'

const App = () =>
  <Router>
    <div>
      <Nav />
      <Dashboard />
      <Switch>
        <Route exact path="/" component={Choice} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
