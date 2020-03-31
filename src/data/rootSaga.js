import { all, fork } from "redux-saga/effects";

import userSaga from "data/user/sagaRegister";
import adminSaga from "data/admins/sagaRegister";

export default function*() {
  yield all([fork(userSaga), fork(adminSaga)]);
}
