import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from './errors_reducer';
import income from './income_reducer';
import entities from './entities_reducer';

const RootReducer = combineReducers({
  entities,
  session,
  errors,
  income
});

export default RootReducer;
