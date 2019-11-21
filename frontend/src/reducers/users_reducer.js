// import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import {
  RECEIVE_USER,
} from "../actions/users_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_USER:
      nextState = Object.assign({}, state, { [action.user.id]: action.user });
      return nextState;
    default:
      return state;
  }
};
export default usersReducer;
