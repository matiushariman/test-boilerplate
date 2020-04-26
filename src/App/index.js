import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import NavBar from 'components/NavBar';
import ToDoListPage from 'Pages/ToDoListPage/Loadable';
import HomePage from 'Pages/HomePage';
import GlobalStyle from 'global-styles';

const RouteWrapper = styled.div`
  margin: 0 auto;
  max-width: 65rem;
  width: 100%;
`;

function App() {
  return (
    <>
      <NavBar />
      <RouteWrapper>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/to-do" component={ToDoListPage} exact />
        </Switch>
      </RouteWrapper>
      <GlobalStyle />
    </>
  );
}

export default App;
