import { loading, failure, success, notAsked } from "data/utils";

export const LOG_IN = "LOG_IN";
export const LOG_IN_SUCCESS = success(LOG_IN);
export const LOG_IN_FAILURE = failure(LOG_IN);
export const LOG_IN_LOADING = loading(LOG_IN);
export const LOG_IN_SOCIAL = "LOG_IN_SOCIAL";
export const LOG_IN_TRADITIONAL = "LOG_IN_TRADITIONAL";

export const LOG_OUT = "LOG_OUT";

export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = success(REGISTER);
export const REGISTER_FAILURE = failure(REGISTER);
export const REGISTER_LOADING = loading(REGISTER);

export const WHO_AM_I = "WHO_AM_I";
export const WHO_AM_I_SUCCESS = success(WHO_AM_I);
export const WHO_AM_I_FAILURE = failure(WHO_AM_I);
export const WHO_AM_I_LOADING = loading(WHO_AM_I);

export const RESET_AUTH = "RESET_AUTH";

export const SET_USER_SESSION = "SET_USER_SESSION";

export const TOGGLE_AUTH_MODE = "TOGGLE_AUTH_MODE";

export const GIVE_TEMP_PASSWORD = "GIVE_TEMP_PASSWORD";
export const GIVE_TEMP_PASSWORD_SUCCESS = success(GIVE_TEMP_PASSWORD);
export const GIVE_TEMP_PASSWORD_FAILURE = failure(GIVE_TEMP_PASSWORD);
export const GIVE_TEMP_PASSWORD_LOADING = loading(GIVE_TEMP_PASSWORD);

export const UPDATE_PASSWORD = "UPDATE_PASSWORD";
export const UPDATE_PASSWORD_SUCCESS = success(UPDATE_PASSWORD);
export const UPDATE_PASSWORD_FAILURE = failure(UPDATE_PASSWORD);
export const UPDATE_PASSWORD_LOADING = loading(UPDATE_PASSWORD);
