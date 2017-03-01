/* eslint-disable */
import { put, fork, takeEvery } from 'redux-saga/effects'
import { userFormActions } from './actions'
import { SubmissionError } from 'redux-form'
import { usersActions } from '../users/index'

export function* userFormSubmit ({ payload }) {

  if ( payload.userId ) {
    yield put(usersActions.editUserRequest(payload))
  } else {
    yield put(usersActions.addUserRequest(payload))
  }
}

export function* userFormSubmitSuccess ({ payload }) {
  yield put(userFormActions.userFormSuccess(payload));
}

export function* userFormSubmitFailure ({ payload }) {
  yield put(userFormActions.userFormFailure(new SubmissionError(payload)))
}


// Watchers
export function* watchUserFormSubmit() {
  yield takeEvery(userFormActions.USER_FORM_SUBMIT_REQUEST, userFormSubmit);
}

export function* watchUserFormSubmitSuccess() {
  yield takeEvery([
    usersActions.ADD_USER_SUCCESS,
    usersActions.EDIT_USER_SUCCESS
  ], userFormSubmitSuccess);
}

export function* watchUserFormSubmitFailure() {
  yield takeEvery([
    usersActions.ADD_USER_FAILURE,
    usersActions.EDIT_USER_FAILURE
  ], userFormSubmitFailure);
}


// Root saga
export const userFormSagas = [
  fork(watchUserFormSubmit),
  fork(watchUserFormSubmitSuccess),
  fork(watchUserFormSubmitFailure),
];