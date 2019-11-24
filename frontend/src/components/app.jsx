import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Redirect, Route } from "react-router-dom";
import '../stylesheets/app.scss';
import '../stylesheets/reset.css';

import IncomeIndexContainer from './income/income_index_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import HomeContainer from './session/home_container';
// import MainContainer from './main/main_page_container';
import CreateExpense from './expense/create_expense_form_container';
import UpdateExpense from './expense/update_expense_container';
import ExpenseIndexContainer from './expense/expense_index_container';
import IncomeContainer from './income/income_container';



const App = () => (
  <div className="app-view-port">
    <Switch>
      <Route exact path="/expense" component={ExpenseIndexContainer} />
      <Route exact path="/postexpense" component={CreateExpense} />
      <Route exact path="/updateexpense" component={UpdateExpense} />
      <AuthRoute exact path="/" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/home" component={HomeContainer} />
      <ProtectedRoute exact path="/income" component={IncomeIndexContainer} />
      <ProtectedRoute exact path="/postincome" component={IncomeContainer} />
     < Redirect to="/"/>
    </Switch>
  </div>
);

export default App;