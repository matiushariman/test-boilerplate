import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createRootReducer from './reducers';

export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['toDoList'],
};

const persistedReducer = persistReducer(persistConfig, createRootReducer(history));

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: [routerMiddleware(history), ...getDefaultMiddleware()],
    preloadedState,
  });

  const persistor = persistStore(store);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(createRootReducer(history)));
  }

  return { store, persistor };
}
