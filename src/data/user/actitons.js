import * as AT from "data/rootActionTypes";

export const loginTraditional = userLoginInfo => ({
  type: AT.LOG_IN_TRADITIONAL,
  userLoginInfo
});
export const loginSocial = userLoginInfo => ({
  type: AT.LOG_IN_SOCIAL,
  userLoginInfo
});
export const loginLoading = () => ({
  type: AT.LOG_IN_LOADING
});
export const loginFailure = error => ({
  type: AT.LOG_IN_FAILURE,
  error
});
export const loginSuccess = data => ({
  type: AT.LOG_IN_SUCCESS,
  data
});

export const logout = () => ({
  type: AT.LOG_OUT
});

export const register = userRegisterInfo => ({
  type: AT.REGISTER,
  userRegisterInfo
});
export const registerLoading = () => ({
  type: AT.REGISTER_LOADING
});
export const registerFailure = error => ({
  type: AT.REGISTER_FAILURE,
  error
});
export const registerSuccess = data => ({
  type: AT.REGISTER_SUCCESS,
  data
});

export const whoAmI = () => ({
  type: AT.WHO_AM_I
});
export const whoAmILoading = () => ({
  type: AT.WHO_AM_I_LOADING
});
export const whoAmIFailure = error => ({
  type: AT.WHO_AM_I_FAILURE,
  error
});
export const whoAmISuccess = data => ({
  type: AT.WHO_AM_I_SUCCESS,
  data
});

export const resetAuth = () => ({
  type: AT.RESET_AUTH
});

export const setUserSession = userSession => ({
  type: AT.SET_USER_SESSION,
  userSession
});

export const toggleAuthMode = authMode => ({
  type: AT.TOGGLE_AUTH_MODE,
  authMode
});
