import React from "react";
import { ConnectedRouter as Router } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import { DefaultLayout, MasterLayout, AdminLayout } from "layout";

import {
  Daily,
  Total,
  Auth,
  FindPassword,
  AdminApply,
  AdminList,
  Error404,
  Error500
} from "pages";

function App({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* 누구나 접근가능한 public route */}
        <Route exact path="/" component={Auth} />
        <Route path="/auth" component={Auth} />

        {/* admin 이고 approved 받는 user 만 접근가능 */}
        <AdminLayout path="/daily" component={Daily} />
        <AdminLayout path="/total" component={Total} />

        {/* master user 만 접근가능 */}
        <MasterLayout path="/adminApply" component={AdminApply} />
        <MasterLayout path="/adminList" component={AdminList} />

        {/* error 처리 */}
        <Route path="/500" component={Error500} />
        <Route path="/" component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
