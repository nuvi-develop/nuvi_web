import * as sagas from "./sagas";
import * as AT from "data/rootActionTypes";
import { takeEvery } from "redux-saga/effects";

export default function*() {
  yield takeEvery(AT.GET_WAITING_ADMINS, sagas.getWaitingAdmins);
  yield takeEvery(AT.GET_ADMINS, sagas.getAdmins);
  yield takeEvery(AT.DELETE_ADMIN, sagas.deleteAdmin);
  yield takeEvery(AT.UPDATE_TO_ADMIN, sagas.updateToAdmin);
}
