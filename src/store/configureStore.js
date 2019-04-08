import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
// 'routerMiddleware': the new way of storing route changes with redux middleware since rrV4.
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers';
import rootSaga from '../sagas/sagas'

export const history = createHistory();
const connectRouterHistory = connectRouter(history);

function configureStoreProd(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    thunk,
    reactRouterMiddleware,
    sagaMiddleware,
  ];


  const store = createStore(
    connectRouterHistory(rootReducer),
    initialState,
    compose(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

function configureStoreDev(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    reduxImmutableStateInvariant(),
    thunk,
    reactRouterMiddleware,
    sagaMiddleware,
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(
    connectRouterHistory(rootReducer),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(connectRouterHistory(nextRootReducer));
    });
  }

  sagaMiddleware.run(rootSaga);

  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
