import { loading, failure, success } from "data/utils";

export const GET_WAITING_ADMINS = "GET_WAITING_ADMIN";
export const GET_WAITING_ADMINS_SUCCESS = success(GET_WAITING_ADMINS);
export const GET_WAITING_ADMINS_FAILURE = failure(GET_WAITING_ADMINS);
export const GET_WAITING_ADMINS_LOADING = loading(GET_WAITING_ADMINS);

export const GET_ADMINS = "GET_ADMINS";
export const GET_ADMINS_SUCCESS = success(GET_ADMINS);
export const GET_ADMINS_FAILURE = failure(GET_ADMINS);
export const GET_ADMINS_LOADING = loading(GET_ADMINS);

export const UPDATE_TO_ADMIN = "UPDATE_TO_ADMIN";

export const DELETE_ADMIN = "DELETE_ADMIN";
