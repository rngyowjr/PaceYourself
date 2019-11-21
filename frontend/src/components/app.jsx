import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Redirect } from 'react-router-dom';
import '../stylesheets/app.scss';
import '../stylesheets/reset.css';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import HomeContainer from './session/home_container';

const App = () => (
  <div className="app-view-port">
    <Switch>
      <AuthRoute exact path="/" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/home" component={HomeContainer} />
     < Redirect to="/signup"/>
    </Switch>
  </div>
);

export default App;