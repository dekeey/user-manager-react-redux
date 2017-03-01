import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import rootSaga from './sagas'
import { formActionSaga } from 'redux-form-saga';
import { persistStore, autoRehydrate } from 'redux-persist';
import localForage from 'localforage';


let initState = {
};

export default function configureStore(initialState = initState) {

  const middlewares = [];

  // Create the saga middleware
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  // For Redux devtools browser extension
  const composeEnhancers =
    process.env.NODE_ENV == 'development' &&
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

  const enhancers = composeEnhancers(
    applyMiddleware(...middlewares),
    autoRehydrate()
  );


  const store = createStore(reducers, initialState, enhancers);

  localForage.setDriver(localForage.LOCALSTORAGE);
  persistStore(store, { blacklist: ['form', 'userForm'], storage: localForage });
  sagaMiddleware.run(rootSaga);
  sagaMiddleware.run(formActionSaga);


  return store
}