import { put } from "redux-saga/effects";

import { actions } from "data";

const delay = ms => new Promise(res => setTimeout(res, ms));

export function* modalUpAndGo(action) {
  const { contents } = action.payload;
  yield put(
    actions.modal.setModal({
      modalType: "INFO",
      modalProps: { contents }
    })
  );
  yield delay(1000);
  yield put(actions.modal.clearModal());
}
