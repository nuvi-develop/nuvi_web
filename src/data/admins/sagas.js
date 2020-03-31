import { put, call } from "redux-saga/effects";

import { actions } from "data";
import api from "api";

export function* getWaitingAdmins(action) {
  try {
    yield put(actions.admins.getWaitingAdminsLoading);
    const res = yield api.userApi.getWaitingAdmin();
    const waitingAdminList = res.data;
    yield put(actions.admins.getWaitingAdminsSuccess(waitingAdminList));
  } catch (e) {
    yield put(actions.admins.getWaitingAdminsFailure({ message: e.message }));
  }
}

export function* getAdmins(action) {
  try {
    yield put(actions.admins.getAdminsLoading);
    const res = yield api.userApi.getAdminList();
    const adminList = res.data;
    yield put(actions.admins.getAdminsSuccess(adminList));
  } catch (e) {
    yield put(actions.admins.getAdminsFailure({ message: e.message }));
  }
}

export function* updateToAdmin(action) {
  try {
    const { userId } = action;
    yield api.userApi.approveAdmin(userId);
    yield put(actions.admins.getWaitingAdmins());
  } catch (e) {
    console.log("e.message", e.message);
  }
}

export function* deleteAdmin(action) {
  try {
    const { userId } = action;
    yield api.userApi.deleteUser(userId);
    yield put(actions.admins.getAdmins());
    yield put(actions.admins.getWatingAdmins());
  } catch (e) {
    console.log("e.message", e.message);
  }
}
