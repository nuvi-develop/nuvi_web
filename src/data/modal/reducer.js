import produce from "immer";

import * as AT from "data/rootActionTypes";

const Initial_State = {
  modalType: null,
  modalProps: null
};

const modal = produce((draft, action) => {
  switch (action.type) {
    case AT.SET_MODAL:
      draft.modalType = action.payload.modalType;
      draft.modalProps = action.payload.modalProps;
      break;
    case AT.CLEAR_MODAL:
      return Initial_State;

    default:
      return;
  }
}, Initial_State);

export default modal;
