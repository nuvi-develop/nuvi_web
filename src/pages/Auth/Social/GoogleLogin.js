import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import GoogleLogin from "react-google-login";

import { google } from "config";
import { actions } from "data";
import api from "api";

export default function GoogleLoginComponent() {
  const dispatch = useDispatch();

  const onSuccess = async googleUser => {
    // const profile = googleUser.getBasicProfile();
    // const id = profile.getId();
    // const name = profile.getName();
    // const imageUrl = profile.getImageUrl();
    // const emailAddress = profile.getEmail();
    const googleToken = googleUser.getAuthResponse().id_token;
    dispatch(actions.user.loginSocial({ googleToken }));
  };

  const onFailure = error => {
    console.log("error", error);
  };
  return (
    <StyledGoogleLogin
      clientId={google.oAuthId}
      buttonText="GOOGLE 로그인"
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
}

export const onSignOut = () => {
  window.gapi.auth2.getAuthInstance().then(googleAuth => {
    googleAuth.signOut();
  });
};

const StyledGoogleLogin = styled(GoogleLogin)`
  margin: 5vh;
`;
