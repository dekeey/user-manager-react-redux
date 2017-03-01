const userFormActionPrefix = 'USER_FORM_SUBMIT';
import { createFormAction } from 'redux-form-saga'

export const userFormActionCreator = createFormAction(userFormActionPrefix);

export const userFormActions = {
  //actions
  USER_FORM_SUBMIT_REQUEST: userFormActionCreator.REQUEST,
  USER_FORM_SUBMIT_SUCCESS: userFormActionCreator.SUCCESS,
  USER_FORM_SUBMIT_FAILURE: userFormActionCreator.FAILURE,

  SHOW_FORM: 'USER_FORM/SHOW',
  HIDE_FORM: 'USER_FORM/HIDE',
  //Action creators
  userFormRequest: (email, password) => userFormActionCreator.request({email, password}),
  userFormSuccess: (payload) => userFormActionCreator.success(payload),
  userFormFailure: (error) => userFormActionCreator.failure(error),
  userFormSubmitHandler: userFormActionCreator,

  showForm: (user) => ({
    type: userFormActions.SHOW_FORM,
    payload: {
      ...user
    }
  }),
  hideForm: () => ({
    type: userFormActions.HIDE_FORM,
  })

};