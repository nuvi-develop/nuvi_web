import { put, call } from "redux-saga/effects";
import { OAuth2Client } from "google-auth-library";

import { actions } from "data";
import { setAuthCookie, getAuthCookie, clearAuthCookie } from "data/cookie";
import api from "api";
import { google } from "config";

const GOOGLE_CLIENT_ID = google.oAuthId;
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

export function* login(action) {
  try {
    yield put(actions.user.loginLoading());
    const { userLoginInfo } = action;
    const { token } = userLoginInfo;
    //Social Login
    if (token) {
      const login = yield client.verifyIdToken({
        idToken: token,
        audience: GOOGLE_CLIENT_ID
      });
      console.log("login", login);
      const payload = login.getPayload();
      const audience = payload.aud;
      // 토큰 인증
      if (audience !== GOOGLE_CLIENT_ID) {
        throw new Error("등록된 Google 유저가 아닙니다.");
      }
      // 유저 프로필 받아옴
      const userPayloadData = {
        name: payload["name"],
        pic: payload["picture"],
        id: payload["sub"],
        email_verified: payload["email_verified"],
        emailAddress: payload["email"]
      };
      const res = yield api.authApi.loginSocial(userPayloadData);
      const { userData } = res.data;
      yield put(actions.user.loginSuccess(userData));

      //Traditional password login
    } else {
      const res = yield api.authApi.loginTraditional(userLoginInfo);
      const { userData } = res.data;
      setAuthCookie(userData);
      yield put(actions.user.loginSuccess(userData));
    }
    yield put(actions.router.push("/daily"));
  } catch (e) {
    yield put(actions.user.loginFailure({ message: e.message }));
  }
}

export function* register(action) {
  try {
    const { userRegisterInfo } = action;
    yield put(actions.user.registerLoading());
    const res = yield api.authApi.register(userRegisterInfo);
    const { userData } = res.data;
    yield put(actions.user.registerSuccess(userData));
    yield put(actions.user.toggleAuthMode("login"));
  } catch (e) {
    yield put(actions.user.registerFailure({ message: e.message }));
  }
}
