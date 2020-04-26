import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import createSagaMiddleware from 'redux-saga';

import createRootReducer from './reducers';
import exampleSaga from './saga';

export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['toDoList'],
};

const persistedReducer = persistReducer(persistConfig, createRootReducer(history));
const PERSIST_ACTIONS = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({ thunk: false, serializableCheck: { ignoredActions: PERSIST_ACTIONS } }),
  sagaMiddleware,
  routerMiddleware(history),
];

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: persistedReducer,
    middleware,
    preloadedState,
  });

  const persistor = persistStore(store);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(createRootReducer(history)));
  }

  sagaMiddleware.run(exampleSaga);

  return { store, persistor };
}
