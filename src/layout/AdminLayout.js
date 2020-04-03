import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { actions, selectors } from "data";

export default function AdminLayout({ component: Component, ...rest }) {
  const dispatch = useDispatch();
  const whoAmIRemote = useSelector(selectors.user.getWhoAmI);

  useEffect(() => {
    dispatch(actions.user.whoAmI());
  }, []);

  let Layout = () => (
    <Route
      {...rest}
      render={matchProps => <Component {...matchProps} {...rest} />}
    />
  );
  if (whoAmIRemote.data) {
    const { isAdmin, approved } = whoAmIRemote.data;
    if (!(isAdmin && approved)) {
      Layout = () => {
        dispatch(actions.user.resetAuth());
        return <Redirect from="" to="/" />;
      };
    }
  }

  return whoAmIRemote.cata({
    NotAsked: () => "loading",
    Loading: () => "loading",
    Failure: () => <Redirect from="" to="/" />,
    Success: () => <Layout />
  });
}
