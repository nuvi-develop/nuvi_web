import produce from "immer";

import * as AT from "data/rootActionTypes";
import Remote from "data/remote";

const Initial_State = {
  waitingAdmins: [],
  admins: [],
  [AT.GET_WAITING_ADMINS]: Remote.NotAsked,
  [AT.GET_ADMINS]: Remote.NotAsked
};

const admin = produce((draft, action) => {
  switch (action.type) {
    case AT.GET_WAITING_ADMINS_SUCCESS:
      draft.waitingAdmins = action.data;
      draft[AT.GET_WAITING_ADMINS] = Remote.Success(action.data);
      break;
    case AT.GET_WAITING_ADMINS_FAILURE:
      draft[AT.GET_WAITING_ADMINS] = Remote.Failure(action.error);
      break;
    case AT.GET_WAITING_ADMINS_LOADING:
      draft[AT.GET_WAITING_ADMINS] = Remote.Loading;
      break;

    case AT.GET_ADMINS_SUCCESS:
      draft.admins = action.data;
      draft[AT.GET_ADMINS] = Remote.Success(action.data);
      break;
    case AT.GET_ADMINS_FAILURE:
      draft[AT.GET_ADMINS] = Remote.Failure(action.error);
      break;
    case AT.GET_ADMINS_LOADING:
      draft[AT.GET_ADMINS] = Remote.Loading;
      break;
    default:
      return;
  }
}, Initial_State);

export default admin;
