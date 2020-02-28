import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import { Daily, Total, Auth } from "pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Daily} />
        <Route path="/daily" component={Daily} />
        <Route path="/total" component={Total} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </Router>
  );
}

export default App;
