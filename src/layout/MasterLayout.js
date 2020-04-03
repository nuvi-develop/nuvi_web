import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { actions, selectors } from "data";

export default function MasterLayout({ component: Component, ...rest }) {
  const dispatch = useDispatch();
  const whoAmIRemote = useSelector(selectors.user.getWhoAmI);

  useEffect(() => {
    dispatch(actions.user.whoAmI());
  }, []);

  if (whoAmIRemote.data) {
    const { id } = whoAmIRemote.data;
    if (id !== "master") {
      dispatch(actions.user.resetAuth());
      return <Redirect from="" to="/" />;
    }
  }

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
