import { put, call } from "redux-saga/effects";

import { actions } from "data";
import { setAuthCookie, getAuthCookie, clearAuthCookie } from "data/cookie";
import api from "api";

export function* login(action) {
  try {
    const { userLoginInfo } = action;
    yield put(actions.user.loginLoading());

    const res = yield api.authApi.login(userLoginInfo);
    const { userData } = res.data;
    console.log("userData", userData);
    yield put(actions.router.push("/daily"));
  } catch (e) {}
}
