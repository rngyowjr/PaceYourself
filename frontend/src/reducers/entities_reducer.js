import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import expensesReducer from './expenses_reducer';
import IncomeReducer from './incomes_reducer';

export default combineReducers({
  users: UsersReducer,
  incomes: IncomeReducer,
  expenses: expensesReducer
});