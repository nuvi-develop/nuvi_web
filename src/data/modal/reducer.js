import produce from "immer";

import * as AT from "data/rootActionTypes";

const Initial_State = false;

const modal = produce((draft, action) => {
  switch (action.type) {
    case AT.SET_MODAL:
      return action.modal;
    case AT.CLEAR_MODAL:
      return false;

    default:
      return;
  }
}, Initial_State);

export default modal;
