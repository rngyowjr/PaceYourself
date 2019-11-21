import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
// export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

// const receiveUsers = users => {
//   return {
//     type: RECEIVE_USERS,
//     users
//   };
// };

const receiveUser = currentUser => {
  return {
    type: RECEIVE_USER,
    currentUser
  };
};

//do we still need this if there's already a receive_session_errors under session?
const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

// export const fetchUsers = () => dispatch => {
//   return UserApiUtil.fetchUsers().then(users => dispatch(receiveUsers(users)));
// };

export const fetchUser = userId => dispatch => {
  return UserApiUtil.fetchUser(userId).then(user =>
    dispatch(receiveUser(user))
  );
};

export const updateUser = user => dispatch => {
  return UserApiUtil.updateUser(user).then(
    user => dispatch(receiveUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};
