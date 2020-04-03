import produce from "immer";

import Remote from "data/remote";
import * as AT from "data/rootActionTypes";

const Initial_State = {
  userSession: null,
  [AT.LOG_IN]: Remote.NotAsked,
  [AT.REGISTER]: Remote.NotAsked,
  [AT.WHO_AM_I]: Remote.NotAsked,
  authMode: "login"
};

const user = produce((draft, action) => {
  switch (action.type) {
    case AT.SET_USER_SESSION:
      draft.userSession = action.userSession;
      break;
    case AT.RESET_AUTH:
      draft.userSession = null;
      draft[AT.LOG_IN] = Remote.NotAsked;
      draft[AT.LOG_IN] = Remote.NotAsked;
      draft[AT.REGISTER] = Remote.NotAsked;
      draft[AT.WHO_AM_I] = Remote.NotAsked;
      break;
    case AT.LOG_IN_LOADING:
      draft[AT.LOG_IN] = Remote.Loading;
      break;
    case AT.LOG_IN_SUCCESS:
      draft[AT.LOG_IN] = Remote.Success(action.data);
      break;
    case AT.LOG_IN_FAILURE:
      draft[AT.LOG_IN] = Remote.Failure(action.error);
      break;
    case AT.REGISTER_LOADING:
      draft[AT.REGISTER] = Remote.Loading;
      break;
    case AT.REGISTER_SUCCESS:
      draft[AT.REGISTER] = Remote.Success(action.data);
      break;
    case AT.REGISTER_FAILURE:
      draft[AT.REGISTER] = Remote.Failure(action.error);
      break;

    case AT.WHO_AM_I_LOADING:
      console.log("Remote.Loading", Remote.Loading);
      draft[AT.WHO_AM_I] = Remote.Loading;
      break;
    case AT.WHO_AM_I_SUCCESS:
      draft[AT.WHO_AM_I] = Remote.Success(action.data);
      break;
    case AT.WHO_AM_I_FAILURE:
      draft[AT.WHO_AM_I] = Remote.Failure(action.error);
      break;

    case AT.TOGGLE_AUTH_MODE:
      draft.authMode = action.authMode;
      break;
    default:
      return;
  }
}, Initial_State);

export default user;
