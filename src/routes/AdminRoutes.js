import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { actions, selectors } from "data";

export default function AdminRoutes({
  component: Component,
  layout: Layout,
  ...rest
}) {
  const dispatch = useDispatch();
  const whoAmIRemote = useSelector(selectors.user.getWhoAmI);

  useEffect(() => {
    dispatch(actions.user.whoAmI());
  }, []);

  let Routes = () => (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} {...rest} />
        </Layout>
      )}
    />
  );
  if (whoAmIRemote.data) {
    const { isAdmin, approved } = whoAmIRemote.data;
    if (!(isAdmin && approved)) {
      Routes = () => {
        dispatch(actions.user.resetAuth());
        dispatch(
          actions.modal.modalUpAndGo({ contents: "어드민 승인이 필요합니다." })
        );

        return <Redirect from="" to="/" />;
      };
    }
  }

  return whoAmIRemote.cata({
    NotAsked: () => "loading",
    Loading: () => "loading",
    Failure: () => <Redirect from="" to="/" />,
    Success: () => <Routes />
  });
}
