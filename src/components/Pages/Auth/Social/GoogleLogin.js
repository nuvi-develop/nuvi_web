import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import GoogleLogin from "react-google-login";

import { google } from "config";
import api from "api";
import { actions } from "data";

export default function GoogleLoginComponent({ setRegisterPage }) {
  const dispatch = useDispatch();

  const onSuccess = async googleUser => {
    console.log("googleUser", googleUser);
    const profile = googleUser.getBasicProfile();
    const token = googleUser.getAuthResponse().id_token;
    const id = profile.getId();
    const name = profile.getName();
    const imageUrl = profile.getImageUrl();
    const emailAddress = profile.getEmail();
    if (emailAddress) {
      const res = await api.authApi
        .checkEmail({ emailAddress })
        .catch(error => console.log("error", error));

      if (!res.data) {
        const user = {
          emailAddress,
          name,
          providerType: "google",
          providerKey: id,
          DepartmentId: 1
        };
        await api.authApi
          .register(user)
          .catch(error => console.log("error", error));
      }
    }
    dispatch(actions.router.push("/daily"));
  };
  return (
    <GoogleLogin
      clientId={google.oAuthId}
      buttonText="로그인"
      onSuccess={onSuccess}
    />
  );
}

export const onSignOut = () => {
  console.log("signed out!");
  window.gapi.auth2.getAuthInstance().then(googleAuth => {
    googleAuth.signOut();
  });
};

const SocialLoginButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
