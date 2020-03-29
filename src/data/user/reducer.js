import produce from "immer";

import Remote from "data/remote";
import * as AT from "data/rootActionTypes";

const Initial_State = {
  userSession: null,
  [AT.LOG_IN]: Remote.NotAsked,
  [AT.REGISTER]: Remote.NotAsked
};

const user = produce((draft, action) => {
  switch (action.type) {
    case AT.SET_USER_SESSION:
      draft.userSession = action.userSession;
      break;
    case AT.RESET_AUTH:
      draft.userSession = null;
      draft[AT.LOG_IN] = Remote.NotAsked;
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
    default:
      return;
  }
}, Initial_State);

export default user;
