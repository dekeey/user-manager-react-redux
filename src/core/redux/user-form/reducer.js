import { userFormActions } from './actions';

export const initialState = {
  show: false,
  user: {}
};

export function userFormReducer (state = initialState, {type, payload} ) {

  switch (type) {

    case userFormActions.SHOW_FORM:
      return { ...state, show: true, user: payload};

    case userFormActions.HIDE_FORM:
    case userFormActions.USER_FORM_SUBMIT_SUCCESS:
      return { ...state, show: false, user: {} };

    default:
      return state
  }
}