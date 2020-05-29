import React from "react";
import { ConnectedRouter as Router } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import { MasterRoutes, AdminRoutes } from "routes";
import { DashBoardLayout, AuthLayout } from "layout";

import {
  Daily,
  Total,
  Auth,
  AdminApply,
  AdminList,
  Error404,
  Error500,
  UserProfile,
  Inventory
} from "pages";

function App({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* 누구나 접근가능한 public route */}
        <Route
          exact
          path="/"
          render={matchProps => (
            <AuthLayout>
              <Auth {...matchProps} />
            </AuthLayout>
          )}
        />

        {/* admin 이고 approved 받는 user 만 접근가능 */}
        <AdminRoutes path="/daily" layout={DashBoardLayout} component={Daily} />
        <AdminRoutes path="/total" layout={DashBoardLayout} component={Total} />
        <AdminRoutes
          path="/inventory"
          layout={DashBoardLayout}
          component={Inventory}
        />
        <AdminRoutes
          path="/profile"
          layout={DashBoardLayout}
          component={UserProfile}
        />

        {/* master user 만 접근가능 */}
        <MasterRoutes
          path="/adminApply"
          layout={DashBoardLayout}
          component={AdminApply}
        />
        <MasterRoutes
          path="/adminList"
          layout={DashBoardLayout}
          component={AdminList}
        />

        {/* error 처리 */}
        <Route path="/500" component={Error500} />
        <Route path="/" component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
