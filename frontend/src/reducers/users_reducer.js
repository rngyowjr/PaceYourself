import { RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
      return nextState;
    case RECEIVE_USER_LOGOUT:
        return state;
    default:
      return state;
  }
};
export default usersReducer;
