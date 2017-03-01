/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';

import { months, years, days } from '../../utils/date'
import { isValidPhoneNumber } from '../../utils/phone'
import Input from '../form-input/index'
import Select from '../select/index'

import { Field, reduxForm, formValueSelector } from 'redux-form';
import Button from '../button/index'
import { userFormActions } from '../../../core/redux/user-form/index'


export class UserForm extends React.Component {

  constructor(props){
    super(props);
  }

  static validate(values) {
    const errors = {};

    if (!Number.isInteger(parseInt(values.dayOfBirth))) {
      errors.dayOfBirth = 'Please, enter day of birth'
    }

    if (!Number.isInteger(parseInt(values.monthOfBirth))) {
      errors.monthOfBirth = 'Please, enter month of birth'
    }

    if (!Number.isInteger(parseInt(values.yearOfBirth))) {
      errors.yearOfBirth = 'Please, enter year of birth'
    }

    if (!values.fio) {
      errors.fio = 'Please, enter full name'
    }

    if (values.fio && values.fio.length > 100) {
      errors.fio = 'must be less that 100 characters'
    }

    if (values.phone && !isValidPhoneNumber(values.phone)) {
      errors.phone = 'please enter a valid russian cell phone number'
    }
    return errors
  };

  render() {

    const { handleSubmit, monthSelected, yearSelected, hideForm } = this.props;

    return (
      <div className='b-user-form'>
        <form className='b-user-form__form' onSubmit={handleSubmit(userFormActions.userFormSubmitHandler)}>

          <div className='b-user-form__date-of-birth'>
            <div className='b-user-form__day-of-birth'>
              <Field name='dayOfBirth'
                     component={Select}
                     options={days(yearSelected, monthSelected).map(day => {
                       return {
                         value: day,
                         text: day.toString()
                       }
                     })}
                     selectDefault={true}
                     hintPosition='Left'
                     placeholder='Day'
                     id='dayOfBirth'
              />
            </div>

            <div className='b-user-form__month-of-birth'>
              <Field name='monthOfBirth'
                     component={Select}
                     options={ months.map((month, index) => {
                       return {
                         value: index + 1,
                         text: month
                       }
                     })}
                     selectDefault={true}
                     hintPosition='Top'
                     placeholder='month'
                     id='monthOfBirth'
              />
            </div>

            <div className='b-user-form__year-of-birth'>
              <Field name='yearOfBirth'
                     component={Select}
                     options={ years.map((year) => {
                       return {
                         value: year,
                         text: year.toString()
                       }
                     })}
                     selectDefault={true}
                     hintPosition='Right'
                     placeholder='year'
                     id='yearOfBirth'
              />
            </div>
          </div>

          <div className='b-user-form__fio'>
            <Field name='fio'
                   component={Input}
                   id='fio'
                   hintPosition='Left'
                   placeholder='Full Name'
            />
          </div>

          <div className='b-user-form__address'>
            <Field name='address'
                   component={Input}
                   id='address'
                   placeholder='Address'
            />
          </div>

          <div className='b-user-form__town'>
            <Field name='town'
                   component={Input}
                   id='town'
                   placeholder='City'
            />
          </div>

          <div className='b-user-form__phone'>
            <div className='b-user-form__phone-number'>
              <Field name='phone'
                     component={Input}
                     id='phone'
                     placeholder='Phone ex. 9611116889'
              />
            </div>
          </div>

          <div className='b-user-form__buttons'>
              <Button onClick={handleSubmit(userFormActions.userFormSubmitHandler)}
                      text='Save'
              />
              <Button onClick={hideForm}
                      text='Cancel'
              />
            </div>
        </form>
      </div>
    )
  }
}


UserForm.propTypes = {
  handleSubmit: React.PropTypes.func,
};

const selector = formValueSelector('userForm');
// Connect
const mapStateToProps = (state) => {
  const yearSelected = selector(state, 'yearOfBirth');
  const monthSelected = selector(state, 'monthOfBirth');
  return {
    yearSelected,
    monthSelected
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    hideForm: () => dispatch(userFormActions.hideForm())
  }
};

UserForm = reduxForm({
  form: 'userForm', // a unique name for this form
  validate: UserForm.validate
})(UserForm);

UserForm = connect(mapStateToProps, mapDispatchToProps)(UserForm);

export default UserForm;
