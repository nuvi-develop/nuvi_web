import React from "react";
import { ConnectedRouter as Router } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import { Daily, Total, Auth } from "pages";

function App({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Auth} />
        <Route path={process.env.PUBLIC_URL + "/daily"} component={Daily} />
        <Route path={process.env.PUBLIC_URL + "/total"} component={Total} />
        <Route path={process.env.PUBLIC_URL + "/auth"} component={Auth} />
      </Switch>
    </Router>
  );
}

export default App;
