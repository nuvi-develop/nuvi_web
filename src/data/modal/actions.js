import * as AT from "data/rootActionTypes";

export const setModal = modal => ({
  type: AT.SET_MODAL,
  modal
});

export const clearModal = () => ({
  type: AT.CLEAR_MODAL
});

export const modalUpAndGo = payload => ({
  type: AT.MODAL_UP_AND_GO,
  payload
});
