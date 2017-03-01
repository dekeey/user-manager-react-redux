import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import './styles.scss';

import Button from '../button/index';
import { usersActions } from '../../../core/redux/users/index';
import { userFormActions } from '../../../core/redux/user-form/index';

class User extends React.Component {

  render() {

    let { user, removeUser, editUser } = this.props;

    const cssClass = classNames({
      'b-user': true,
    });

    const edit = () => {
      editUser(user);
    };

    const remove = () => {
      removeUser(user)
    };
    return (
      <div className={cssClass}>
        <div className='b-user__action-buttons'>
          <Button text='Edit' onClick={edit}/>
          <Button text='Remove' onClick={remove}/>
        </div>
        <div className='b-user__fio'>Name: {user.fio}</div>
        <div className='b-user__address'>Address: {user.address}</div>
        <div className='b-user__town'>City: {user.town}</div>
        <div className='b-user__phone'>Phone: {user.phone}</div>
        <div className='b-user__birthday'>Birthday: {user.dayOfBirth}/{user.monthOfBirth}/{user.yearOfBirth}</div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: (user) => dispatch(usersActions.removeUserRequest(user)),
    editUser: (user) => dispatch(userFormActions.showForm(user))
  }
};

User.propTypes = {
  removeUser: React.PropTypes.func,
  editUser: React.PropTypes.func,
  user: React.PropTypes.shape({
    yearOfBirth: React.PropTypes.string,
    dayOfBirth: React.PropTypes.string,
    monthOfBirth: React.PropTypes.string,
    fio: React.PropTypes.string,
    address: React.PropTypes.string,
    town: React.PropTypes.string,
    phone: React.PropTypes.string,
  }),
};


export default connect(null, mapDispatchToProps)(User);
