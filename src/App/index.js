import React from 'react';
import { hot } from 'react-hot-loader';
import { Link, Switch, Route } from 'react-router-dom';

import AlternatePage from '../Pages/AlternatePage/Loadable';
import HomePage from '../Pages/HomePage/Loadable';

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
          <Route path="/alternate" component={AlternatePage} exact />
        </Switch>
      </div>
    </>
  );
}

export default hot(module)(App);
