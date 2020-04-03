import { OAuth2Client } from "google-auth-library";

import { google } from "config";

const GOOGLE_CLIENT_ID = google.oAuthId;
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

export const verifyTokenWithGoogle = async token => {
  const login = await client.verifyIdToken({
    idToken: token,
    audience: GOOGLE_CLIENT_ID
  });
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
  return userPayloadData;
};
