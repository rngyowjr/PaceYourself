import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Redirect, Route } from "react-router-dom";
import '../stylesheets/app.scss';
import '../stylesheets/reset.css';

import IncomeIndexContainer from './income/income_index_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MainContainer from './main/main_page_container';
import ExpenseIndexContainer from './expense/expense_index_container';
import DevelopersComponent from './developers/developers';
import AboutComponent from './about/about';

const App = () => (
  <div className="app-view-port">
    <Switch>
      <Route exact path="/developers" component={DevelopersComponent} />
      <Route exact path="/about" component={AboutComponent} />

      <AuthRoute exact path="/" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/home" component={MainContainer} />
      <ProtectedRoute exact path="/incomes" component={IncomeIndexContainer} />
      <ProtectedRoute exact path="/expenses" component={ExpenseIndexContainer} />
      <Redirect to="/"/>
    </Switch>
  </div>
);

export default App;