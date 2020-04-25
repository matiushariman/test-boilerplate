import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

export const history = createBrowserHistory();

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: createRootReducer(history),
    middleware: [routerMiddleware(history), ...getDefaultMiddleware()],
    preloadedState,
  });

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(createRootReducer(history)));
  }

  return store;
}
