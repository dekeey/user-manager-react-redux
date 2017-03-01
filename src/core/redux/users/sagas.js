/* eslint-disable */
import { put, fork, call, takeEvery } from 'redux-saga/effects'
import { usersActions } from '../users/index'
import { userAdd, userRemove, userUpdate } from '../../api/index'

export function* addUser ({ payload }) {
  try {
    let user = yield call( userAdd, payload );
    yield put(usersActions.addUserSuccess(user));
  } catch (error) {
    yield put(usersActions.addUserFailure(error))
  }
}

export function* updateUser ({ payload }) {
  try {
    let user = yield call( userUpdate, payload );
    yield put(usersActions.editUserSuccess(user));
  } catch (error) {
    yield put(usersActions.editUserFailure(error))
  }
}

export function* removeUser ({ payload }) {
  try {
    let user = yield call( userRemove, payload );
    yield put(usersActions.removeUserSuccess(user));
  } catch (error) {
    yield put(usersActions.removeUserFailure(error))
  }
}

// Watchers
export function* watchAddUserRequest() {
  yield takeEvery(usersActions.ADD_USER_REQUEST, addUser);
}

export function* watchEditUserRequest() {
  yield takeEvery(usersActions.EDIT_USER_REQUEST, updateUser);
}

export function* watchRemoveUserRequest() {
  yield takeEvery(usersActions.REMOVE_USER_REQUEST, removeUser);
}


// Root saga
export const usersSagas = [
  fork(watchAddUserRequest),
  fork(watchEditUserRequest),
  fork(watchRemoveUserRequest),
];