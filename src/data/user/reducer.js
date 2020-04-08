import produce from "immer";

import Remote from "data/remote";
import * as AT from "data/rootActionTypes";

const Initial_State = {
  userSession: null,
  [AT.LOG_IN]: Remote.NotAsked,
  [AT.REGISTER]: Remote.NotAsked,
  [AT.WHO_AM_I]: Remote.NotAsked,
  [AT.GIVE_TEMP_PASSWORD]: Remote.NotAsked,
  [AT.UPDATE_PASSWORD]: Remote.NotAsked,
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
      draft[AT.WHO_AM_I] = Remote.Loading;
      break;
    case AT.WHO_AM_I_SUCCESS:
      draft[AT.WHO_AM_I] = Remote.Success(action.data);
      break;
    case AT.WHO_AM_I_FAILURE:
      draft[AT.WHO_AM_I] = Remote.Failure(action.error);
      break;

    case AT.GIVE_TEMP_PASSWORD_LOADING:
      draft[AT.GIVE_TEMP_PASSWORD] = Remote.Loading;
      break;
    case AT.GIVE_TEMP_PASSWORD_SUCCESS:
      draft[AT.GIVE_TEMP_PASSWORD] = Remote.Success(action.data);
      break;
    case AT.GIVE_TEMP_PASSWORD_FAILURE:
      draft[AT.GIVE_TEMP_PASSWORD] = Remote.Failure(action.error);
      break;

    case AT.UPDATE_PASSWORD_LOADING:
      draft[AT.UPDATE_PASSWORD] = Remote.Loading;
      break;
    case AT.UPDATE_PASSWORD_SUCCESS:
      draft[AT.UPDATE_PASSWORD] = Remote.Success(action.data);
      break;
    case AT.UPDATE_PASSWORD_FAILURE:
      draft[AT.UPDATE_PASSWORD] = Remote.Failure(action.error);
      break;

    case AT.TOGGLE_AUTH_MODE:
      draft.authMode = action.authMode;
      break;
    default:
      return;
  }
}, Initial_State);

export default user;
