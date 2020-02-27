import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import { Daily, Total } from "pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Daily} />
        <Route path="/daily" component={Daily} />
        <Route path="/total" component={Total} />
      </Switch>
    </Router>
  );
}

export default App;
