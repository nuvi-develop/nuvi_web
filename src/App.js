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
        <Route
          exact
          path="/"
          render={matchProps => (
            <AuthLayout>
              <Auth {...matchProps} />
            </AuthLayout>
          )}
        />
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
        <Route path="/500" component={Error500} />
        <Route path="/" component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
