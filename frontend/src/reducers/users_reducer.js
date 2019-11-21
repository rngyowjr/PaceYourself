import { RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT } from "../actions/session_actions";
// import {
//   RECEIVE_USER,
// } from "../actions/users_actions";

const initialState = {
    user: {}
};

const usersReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    // case RECEIVE_USER:
    case RECEIVE_CURRENT_USER:
      nextState = Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
      return nextState;
    case RECEIVE_USER_LOGOUT:
        return initialState;
    default:
      return state;
  }
};
export default usersReducer;
