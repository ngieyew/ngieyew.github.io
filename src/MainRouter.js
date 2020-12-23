import React from 'react';

import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import CardMain from './components/CardMain';

const MainRouter = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={CardMain}></Route>
        <Route exact path="/home" component={CardMain}>
          <p>Home</p>
        </Route>
        <Route exact path="/latest">
          <p>Latest</p>
        </Route>
        <Route exact path="/features">
          <p>Features</p>
        </Route>
        <Route exact path="/regions">
          <p>Regions</p>
        </Route>
        <Route exact path="/account">
          <p>Account</p>
        </Route>
        <Route exact path="/login">
          <p>Login</p>
        </Route>
      </Switch>
    </>
  );
};

export default MainRouter;
