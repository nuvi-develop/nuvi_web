import produce from "immer";

import * as AT from "data/rootActionTypes";

const Initial_State = {
  onClick: () => {},
  contents: null,
  buttonName: "",
  style: ""
};

const modal = produce((draft, action) => {
  switch (action.type) {
    case AT.SET_MODAL:
      draft.onClick = action.modal.onClick;
      draft.contents = action.modal.contents;
      draft.buttonName = action.modal.buttonName;
      draft.style = action.modal.style;
      break;
    case AT.CLEAR_MODAL:
      return Initial_State;

    default:
      return;
  }
}, Initial_State);

export default modal;
