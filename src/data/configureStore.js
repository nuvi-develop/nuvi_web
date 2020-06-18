import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";

import { createRootReducer } from "./rootReducer";
import rootSaga from "./rootSaga";

const history = createBrowserHistory();
const rootReducer = createRootReducer(history);
const sagaMiddleware = createSagaMiddleware();

const env = process.env.NODE_ENV;
const composer = env === "production" ? compose : composeWithDevTools;

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composer(applyMiddleware(thunk, sagaMiddleware, routerMiddleware(history)))
  );

  sagaMiddleware.run(rootSaga);

  return { store, history };
};

export default configureStore;
