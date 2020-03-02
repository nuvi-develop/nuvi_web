import React from "react";
import { ConnectedRouter as Router } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import { Daily, Total, Auth } from "pages";

function App({ history }) {
  return (
    <Router history={history}>
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
