import { all, fork } from "redux-saga/effects";

import userSaga from "data/user/sagaRegister";

export default function*() {
  yield all([fork(userSaga)]);
}
