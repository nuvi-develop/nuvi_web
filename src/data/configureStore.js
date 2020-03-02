import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import { createRootReducer } from "./rootReducer";

const history = createBrowserHistory();
const rootReducer = createRootReducer(history);

const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, routerMiddleware(history)),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return { store, history };
};

export default configureStore;
