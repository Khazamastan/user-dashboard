import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { usersApi } from "../api";
import { storeUsers, storeUsersError, ADD_USERS_INIT} from "../actions";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    const users = yield call(usersApi.getUsers)
    yield put(storeUsers(users.data));
  } catch (e) {
    yield put(storeUsersError());
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "ADD_USERS_INIT" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest(ADD_USERS_INIT, fetchUser)
}

export default mySaga