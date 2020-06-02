import * as AT from "data/rootActionTypes";

export const getUserSession = state => state.user.userSession;

export const getLoginStatus = state => state.user[AT.LOG_IN];

export const getRegisterStatus = state => state.user[AT.REGISTER];

export const getAuthMode = state => state.user.authMode;

export const getWhoAmI = state => state.user[AT.WHO_AM_I];

export const getUpdatePasswordStatus = state => state.user[AT.UPDATE_PASSWORD];

export const getDepartmentId = state => state.user.userSession?.DepartmentId;
