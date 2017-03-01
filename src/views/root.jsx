import React from 'react';
import { Provider } from 'react-redux';
import App from './app/app'
import './styles.scss'

function Root({ store }) {
  return (
    <div className='b-root'>
      <Provider store={ store }>
          <App/>

      </Provider>
    </div>
  );
}

Root.propTypes = {
  store: React.PropTypes.object.isRequired
};

export default Root;
