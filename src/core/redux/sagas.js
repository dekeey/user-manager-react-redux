import { usersSagas } from './users/index'
import { userFormSagas } from './user-form/index'

export default function* sagas() {
  yield [
    ...usersSagas,
    ...userFormSagas,
  ];
}
