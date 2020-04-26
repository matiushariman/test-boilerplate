import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'sanitize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore, { history } from './configureStore';

const { store, persistor } = configureStore({});

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ConnectedRouter>
      </PersistGate>
    </Provider>,
    document.getElementById('root'),
  );
};

// HMR whenever <App /> changes
if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
}

// render app
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
