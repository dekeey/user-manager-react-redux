export const usersActions = {
  //actions
  ADD_USER_REQUEST: 'USERS/ADD_USER_REQUEST',
  ADD_USER_SUCCESS: 'USERS/ADD_USER_SUCCESS',
  ADD_USER_FAILURE: 'USERS/ADD_USER_FAILURE',

  EDIT_USER_REQUEST: 'USERS/EDIT_USER_REQUEST',
  EDIT_USER_SUCCESS: 'USERS/EDIT_USER_SUCCESS',
  EDIT_USER_FAILURE: 'USERS/EDIT_USER_FAILURE',


  REMOVE_USER_REQUEST: 'USERS/REMOVE_USER_REQUEST',
  REMOVE_USER_SUCCESS: 'USERS/REMOVE_USER_SUCCESS',
  REMOVE_USER_FAILURE: 'USERS/REMOVE_USER_FAILURE',

  addUserRequest: (user) => ({
    type: usersActions.ADD_USER_REQUEST,
    payload: {
      ...user
    }
  }),
  addUserSuccess: (user) => ({
    type: usersActions.ADD_USER_SUCCESS,
    payload: {
      ...user
    }
  }),
  addUserFailure: (error) => ({
    type: usersActions.ADD_USER_FAILURE,
    payload: {
      error
    }
  }),

  editUserRequest: (user) => ({
    type: usersActions.EDIT_USER_REQUEST,
    payload: {
      ...user
    },
  }),
  editUserSuccess: (user) => ({
    type: usersActions.EDIT_USER_SUCCESS,
    payload: {
      ...user
    },
  }),
  editUserFailure: (error) => ({
    type: usersActions.EDIT_USER_FAILURE,
    payload: {
      error
    },
  }),

  removeUserRequest: (user) => ({
    type: usersActions.REMOVE_USER_REQUEST,
    payload: {
      ...user
    },
  }),
  removeUserSuccess: (user) => ({
    type: usersActions.REMOVE_USER_SUCCESS,
    payload: {
      ...user
    },
  }),
  removeUserFailure: (error) => ({
    type: usersActions.REMOVE_USER_FAILURE,
    payload: {
      error
    },
  }),
};