import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from './errors_reducer';
import income from './income_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  income
});

export default RootReducer;
