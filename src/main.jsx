import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './core/redux/store'

import Root from './views/root';

const rootElement = document.getElementById('root');


const store = configureStore();


function render(Root) {
  ReactDOM.render(
      <Root store={store}
      />,
    rootElement
  );
}

if (module.hot) {
  module.hot.accept('./views/root', () => {
    render(require('./views/root').default);
  });
}

render(Root);