import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { actions, selectors } from "data";

export default function DefaultRoutes({ component: Component, ...rest }) {
  const dispatch = useDispatch();
  const whoAmIRemote = useSelector(selectors.user.getWhoAmI);

  useEffect(() => {
    dispatch(actions.user.whoAmI());
  }, []);

  return whoAmIRemote.cata({
    NotAsked: () => "loading",
    Loading: () => "loading",
    Failure: () => <Redirect from="" to="/" />,
    Success: () => (
      <Route
        {...rest}
        render={matchProps => <Component {...matchProps} {...rest} />}
      />
    )
  });
}
