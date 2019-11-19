import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom'
import '../stylesheets/app.scss';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import HomeContainer from './session/home_container';

const App = () => (
  <Switch>
    <AuthRoute exact path="/" component={LoginFormContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />

    <ProtectedRoute exact path="/home" component={HomeContainer} />
  </Switch>
);

export default App;