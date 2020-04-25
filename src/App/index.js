import React from 'react';
import { hot } from 'react-hot-loader';
import { Link, Switch, Route } from 'react-router-dom';

import ToDoListPage from '../Pages/ToDoListPage/Loadable';
import HomePage from '../Pages/HomePage/Loadable';
import GlobalStyle from '../global-styles';

function App() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/alternate">Alternate</Link>
      </div>
      <div>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/alternate" component={ToDoListPage} exact />
        </Switch>
      </div>
      <GlobalStyle />
    </>
  );
}

export default hot(module)(App);
