import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import UserForm from '../components/user-form/user-form'
import Button from '../components/button/index'
import UserList from '../components/user-list/user-list'

import { getFormState, userFormActions } from '../../core/redux/user-form/index'
import './styles.scss';

class App extends React.Component {

  render() {
    const cssClass = classNames({
      'b-app': true,
    });

    let { formState, createUser } = this.props;

    return (
      <div className={cssClass}>
        { formState.show && <UserForm initialValues={ formState.user }/> }
        <div className='b-app__new-user'>
          <Button text='New user' onClick={createUser}/>
        </div>
        <UserList/>
      </div>
    );
  }
}

App.propTypes = {
  formState: React.PropTypes.object,
  createUser: React.PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    formState: getFormState(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: () => dispatch(userFormActions.showForm({}))
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
