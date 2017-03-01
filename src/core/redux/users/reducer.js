import { usersActions } from './actions';

export const initialState = {};

export function usersReducer (state = initialState, {type, payload} ) {

  switch (type) {

    case usersActions.ADD_USER_SUCCESS:
    case usersActions.EDIT_USER_SUCCESS:

      return { ...state, [`${payload.userId}`]: {...payload} };

    case usersActions.REMOVE_USER_SUCCESS:
      let newState = {...state};
      delete newState[payload.userId];
      return newState;

    default:
      return state
  }
}