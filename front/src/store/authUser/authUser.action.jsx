import * as authActionTypes from "./authUser.types";

export const signUpStart = (value) => ({
  type: authActionTypes.SIGN_UP_START,
  payload: value,
});
export const signUpSuccess = (userSignUp) => ({
  type: authActionTypes.SIGN_UP_SUCCESS,
  payload: userSignUp,
});
export const signUpError = (error) => ({
  type: authActionTypes.SIGN_UP_ERROR,
  payload: error,
});
export const signInStart = (value) => ({
  type: authActionTypes.SIGN_IN_START,
  payload: value,
});
export const signInSuccess = (userLogin) => ({
  type: authActionTypes.SIGN_IN_SUCCESS,
  payload: userLogin,
});
export const signInError = (error) => ({
  type: authActionTypes.SIGN_IN_ERROR,
  payload: error,
});

export const signInMeStart = (value) => ({
  type: authActionTypes.SIGN_IN_ME_START,
  payload: value,
});
export const signInMeSuccess = (userLogin) => ({
  type: authActionTypes.SIGN_IN_ME_SUCCESS,
  payload: userLogin,
});
export const signInMeError = (error) => ({
  type: authActionTypes.SIGN_IN_ME_ERROR,
  payload: error,
});

export const checkLogin = () => ({
  type: authActionTypes.CHECK_LOGIN,
});

export const signOutStart = (user) => ({
  type: authActionTypes.SIGN_OUT_START,
  payload: user,
});
export const signOutSuccess = (message) => ({
  type: authActionTypes.SIGN_OUT_SUCCESS,
  payload: message,
});

export const signOutError = (message) => ({
  type: authActionTypes.SIGN_OUT_ERROR,
  payload: message,
});
