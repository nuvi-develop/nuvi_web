import { put, call } from "redux-saga/effects";

import { actions } from "data";
import { setAuthCookie, getAuthCookie, clearAuthCookie } from "data/cookie";
import api from "api";

export function* loginSocial(action) {
  try {
    yield put(actions.user.loginLoading());
    const { token } = action.userLoginInfo;

    const res = yield api.authApi.loginSocial({ token });

    const userWithToken = res.data;
    if (userWithToken.type) {
      //가입되어있으면 그대로 로그인
      yield put(actions.user.setUserSession(userWithToken));
      setAuthCookie(userWithToken.token);
      yield put(actions.user.loginSuccess(userWithToken));
      yield put(actions.router.push("/daily"));
    } else {
      //가입이 안되어있으면 추가정보 기입
      yield put(actions.user.loginSuccess(userWithToken));
      yield put(actions.user.toggleAuthMode("registerSocial"));
      return;
    }
  } catch (e) {
    console.log("e.status", e.status);
    if (e.status || e.status !== 500) {
      yield put(actions.user.loginFailure({ message: e.message }));
    } else {
      yield put(actions.router.push("/500"));
    }
  }
}

export function* loginTraditional(action) {
  try {
    yield put(actions.user.loginLoading());
    const { userLoginInfo } = action;

    const res = yield api.authApi.loginTraditional(userLoginInfo);
    const userData = res.data;
    yield put(actions.user.setUserSession(userData));
    setAuthCookie(userData.token);
    yield put(actions.user.loginSuccess(userData));
    if (userData.id === "master") {
      yield put(actions.router.push("/adminApply"));
      return;
    }
    yield put(actions.router.push("/daily"));
  } catch (e) {
    console.log("e.status", e.status);
    if (e.status || (e.status && e.status !== 500)) {
      yield put(actions.user.loginFailure({ message: e.message }));
    } else {
      yield put(actions.router.push("/500"));
    }
  }
}

export function* register(action) {
  try {
    const { userRegisterInfo } = action;
    const { type } = userRegisterInfo;
    let res;
    yield put(actions.user.registerLoading());
    if (type === "social") {
      res = yield api.authApi.registerSocial(userRegisterInfo);
    } else {
      res = yield api.authApi.registerTraditional(userRegisterInfo);
    }
    const userData = res.data;
    yield put(actions.user.registerSuccess(userData));
    yield put(actions.modal.setModal(true));
  } catch (e) {
    yield put(actions.user.registerFailure({ message: e.message }));
  }
}

export function* logout(action) {
  try {
    yield put(actions.user.resetAuth());
    clearAuthCookie();
    yield put(actions.router.push("/"));
  } catch (e) {
    console.log("e.message", e.message);
  }
}

export function* whoAmI(action) {
  try {
    yield put(actions.user.whoAmILoading());
    const maybeValidToken = getAuthCookie();

    const res = yield call(api.userApi.whoAmI, maybeValidToken);
    const user = res.data;
    yield put(actions.user.setUserSession(user));
    yield put(actions.user.whoAmISuccess(user));
  } catch (e) {
    yield put(actions.user.whoAmIFailure({ message: e.message }));
  }
}
