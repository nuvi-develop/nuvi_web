import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import GoogleLogin from "react-google-login";

import { google } from "config";
import api from "api";
import { actions } from "data";

export default function GoogleLoginComponent() {
  const dispatch = useDispatch();

  const onSuccess = async googleUser => {
    // const profile = googleUser.getBasicProfile();
    // const id = profile.getId();
    // const name = profile.getName();
    // const imageUrl = profile.getImageUrl();
    // const emailAddress = profile.getEmail();
    const token = googleUser.getAuthResponse().id_token;
    dispatch(actions.user.login({ token }));
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
