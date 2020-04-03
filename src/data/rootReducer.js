import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import user from "./user/reducer";
import modal from "./modal/reducer";
import admins from "./admins/reducer";
import loading from "./loading/reducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    user,
    modal,
    admins,
    loading
  });

export { createRootReducer };
