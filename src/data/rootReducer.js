import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import user from "./user/reducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    user
  });

export { createRootReducer };
