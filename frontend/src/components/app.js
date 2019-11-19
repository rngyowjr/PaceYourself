import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Home from './session/home';

const App = () => (
  <Switch>
    <AuthRoute exact path="/" component={LoginFormContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />

    <ProtectedRoute exact path="/home" component={Home} />
  </Switch>
);

export default App;