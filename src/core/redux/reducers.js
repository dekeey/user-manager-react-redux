import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { usersReducer } from './users/index'
import { userFormReducer } from './user-form/index'

export default combineReducers({
  form: formReducer,
  userForm: userFormReducer,
  users: usersReducer
})