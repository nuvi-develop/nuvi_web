import * as sagas from "./sagas";
import * as AT from "./actionTypes";
import { takeEvery } from "redux-saga/effects";

export default function*() {
  yield takeEvery(AT.LOG_IN_SOCIAL, sagas.loginSocial);
  yield takeEvery(AT.LOG_IN_TRADITIONAL, sagas.loginTraditional);
  yield takeEvery(AT.REGISTER, sagas.register);
  yield takeEvery(AT.WHO_AM_I, sagas.whoAmI);
  yield takeEvery(AT.LOG_OUT, sagas.logout);
  yield takeEvery(AT.GIVE_TEMP_PASSWORD, sagas.giveTempPassword);
  yield takeEvery(AT.UPDATE_PASSWORD, sagas.updatePassword);
}
