// export const movie = {

export const SET_USER_INFO = "SET_USER_INFO";
export const UPDATE_USERS = "UPDATE_USERS";
export const SET_LOGGED_IN_USER = "LOGGED_IN_USER";

export const setUser = (data) => ({
  type: SET_USER_INFO,
  payload: data,
});

export const updateUsers = (payload) => ({
  type: UPDATE_USERS,
  payload: payload,
});
export const setLoggedInUser = (payload) => ({
  type: SET_LOGGED_IN_USER,
  payload: payload,
});
export const fetch = () => {
  return async (dispatch) => {
    dispatch(updateUsers());
    dispatch(setLoggedInUser(result));
  };
};
