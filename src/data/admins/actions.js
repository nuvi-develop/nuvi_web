import * as AT from "data/rootActionTypes";

export const getWaitingAdmins = () => ({
  type: AT.GET_WAITING_ADMINS
});

export const getWaitingAdminsSuccess = data => ({
  type: AT.GET_WAITING_ADMINS_SUCCESS,
  data
});

export const getWaitingAdminsFailure = error => ({
  type: AT.GET_WAITING_ADMINS_FAILURE,
  error
});

export const getWaitingAdminsLoading = () => ({
  type: AT.GET_WAITING_ADMINS_LOADING
});

export const getAdmins = () => ({
  type: AT.GET_ADMINS
});

export const getAdminsSuccess = data => ({
  type: AT.GET_ADMINS_SUCCESS,
  data
});

export const getAdminsFailure = error => ({
  type: AT.GET_ADMINS_FAILURE,
  error
});

export const getAdminsLoading = () => ({
  type: AT.GET_ADMINS_LOADING
});

export const toggleApproved = userId => ({
  type: AT.TOGGLE_APPROVED,
  userId
});

export const deleteAdmin = userId => ({
  type: AT.DELETE_ADMIN,
  userId
});
