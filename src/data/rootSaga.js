import { all, fork } from "redux-saga/effects";

import userSaga from "data/user/sagaRegister";
import adminSaga from "data/admins/sagaRegister";
import inventorySaga from "data/inventory/sagaRegister";
import modalSaga from "data/modal/sagaRegister";

export default function*() {
  yield all([
    fork(userSaga),
    fork(adminSaga),
    fork(inventorySaga),
    fork(modalSaga)
  ]);
}
