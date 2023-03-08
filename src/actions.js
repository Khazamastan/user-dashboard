export const INCREMENT = "counter/incremented";
export const DECREMENT = "counter/decremented";
export const ADD_USERS_INIT = "users/add_init";
export const ADD_USERS_SUCCESS = "users/add_success";
export const ADD_USERS_FAILURE = "users/add_failure";
export const DELETE_USER = "users/delete";
export const EDIT_USER = "users/edit";

export function increment(payload) {
  return {
    type: INCREMENT,
    payload: payload
  }
}

export function decrement(payload) {
  return {
    type: DECREMENT,
    payload: payload
  }
}


export function storeUsers(payload) {
  return {
    type: ADD_USERS_SUCCESS,
    payload: payload
  }
}

export function storeUsersError(payload) {
  return {
    type: ADD_USERS_FAILURE,
    payload: payload
  }
}


export function initGetUsers(payload) {
  return {
    type: ADD_USERS_INIT,
    payload: payload
  }
}

export function getUsers(payload) {
  return (dispatch) => {
    dispatch(initGetUsers());
    return usersApi.getUsers().then(function (response) {
      let data = response?.data || [];
      dispatch(storeUsers(data));
      return data;
    })
    .catch(function (error) {
      dispatch(storeUsersError());
    })
  }
}

export function deleteUserAction(payload) {
  return {
    type: DELETE_USER,
    payload: payload
  }
}

export function editUserAction(payload) {
  return {
    type: EDIT_USER,
    payload: payload
  }
}
