import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import expenseReducer from './expense_reducer';

export default combineReducers({
  users: UsersReducer,
  incomes: IncomeReducer,
  expenses: expenseReducer
})