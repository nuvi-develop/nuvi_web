import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import { createRootReducer } from "./rootReducer";
import rootSaga from "./rootSaga";

const history = createBrowserHistory();
const rootReducer = createRootReducer(history);
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, sagaMiddleware, routerMiddleware(history)),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  sagaMiddleware.run(rootSaga);

  return { store, history };
};

export default configureStore;
