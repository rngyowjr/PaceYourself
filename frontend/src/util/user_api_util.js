import axios from "axios";

export const fetchUser = userId => {
  return axios.get(`/api/users/${userId}`)
};

export const updateUser = userId => {
  return axios.patch(`/api/users/${userId}`)
};
