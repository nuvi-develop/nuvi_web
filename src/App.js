import React from "react";
import { ConnectedRouter as Router } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import { Daily, Total, Auth, AdminApply, AdminList } from "pages";

function App({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/daily" component={Daily} />
        <Route path="/total" component={Total} />
        <Route path="/auth" component={Auth} />
        <Route path="/adminApply" component={AdminApply} />
        <Route path="/adminList" component={AdminList} />
      </Switch>
    </Router>
  );
}

export default App;
