import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'reducers/index';
import rootSaga from 'sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];

  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const store = createStore(
    rootReducer(),
    initialState,
    composeEnhancers(...enhancers),
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('reducers/index', () => {
      store.replaceReducer(rootReducer(store.injectedReducers));
    });
  }

  return store;
}
