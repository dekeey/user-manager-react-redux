import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import User from '../user/user'
import { getUsers } from '../../../core/redux/users/index'
import './styles.scss';

class UserList extends React.Component {

  render() {
    let { users } = this.props;
    const cssClass = classNames({
      'b-user-list': true,
    });

    return (
      <div className={cssClass}>
        {Object.keys(users).map((userId, index) =>
          <User user={users[userId]} key={index}/>
        )}
      </div>
    );
  }
}

UserList.propTypes = {
  users: React.PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    users: getUsers(state)
  };
};

export default connect(
  mapStateToProps,
  null
)(UserList);
