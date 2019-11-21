import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import IncomeReducer from './incomes_reducer';

export default combineReducers({
  users: UsersReducer,
  incomes: IncomeReducer
})