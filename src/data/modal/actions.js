import * as AT from "data/rootActionTypes";

export const setModal = payload => ({
  type: AT.SET_MODAL,
  payload
});

export const clearModal = () => ({
  type: AT.CLEAR_MODAL
});

export const modalUpAndGo = payload => ({
  type: AT.MODAL_UP_AND_GO,
  payload
});
