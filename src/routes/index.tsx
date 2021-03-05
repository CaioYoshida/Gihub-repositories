import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Repositories from '../pages/Repositories';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} isPrivate />
    <Route exact path="/dashboard" component={Dashboard} isPrivate />
    <Route
      exact
      path="/repositories/:user"
      component={Repositories}
      isPrivate
    />
  </Switch>
);

export default Routes;
