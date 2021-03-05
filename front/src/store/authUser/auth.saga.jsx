import { put, takeEvery, call, all } from "redux-saga/effects";
import * as authUserAction from "./authUser.action";
import * as authUserType from "./authUser.types";
import * as authService from "./auth.service";

export function* signUpAsync(action) {
  try {
    const user = yield call(authService.signUp, action.payload);
    yield put(authUserAction.signUpSuccess(user));
    yield put(authUserAction.signInMeStart(user));
  } catch (error) {
    yield put(authUserAction.signUpError(error));
  }
}

export function* onSignUpStart() {
  yield takeEvery(authUserType.SIGN_UP_START, signUpAsync);
}

export function* signInAsync(action) {
  try {
    const user = yield call(authService.signIn, action.payload);
    yield put(authUserAction.signInSuccess(user));
    yield put(authUserAction.signInMeStart(user));
  } catch (error) {
    yield put(authUserAction.signInError(error));
  }
}
export function* onSignInStart() {
  yield takeEvery(authUserType.SIGN_IN_START, signInAsync);
}

export function* signInMeAsync(action) {
  try {
    const user = yield call(authService.signInMe, action.payload);
    yield put(authUserAction.signInMeSuccess(user));
  } catch (error) {
    yield put(authUserAction.signInMeError(error));
  }
}
export function* onSignInMeStart() {
  yield takeEvery(authUserType.SIGN_IN_ME_START, signInMeAsync);
}

export function* signOutAsync(action) {
  try {
    const user = yield call(authService.signOut, action.payload);
    yield put(authUserAction.signOutSuccess(user));
  } catch (error) {
    yield put(authUserAction.signOutError(error));
  }
}
export function* onSignOutStart() {
  yield takeEvery(authUserType.SIGN_OUT_START, signOutAsync);
}

export function* authUserWatcher() {
  yield all([
    call(onSignUpStart),
    call(onSignInStart),
    call(onSignInMeStart),
    call(onSignOutStart),
  ]);
}
