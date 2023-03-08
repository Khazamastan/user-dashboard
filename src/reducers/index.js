import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import counterReducer from './counterReducer'

export default combineReducers({
    users : usersReducer,
    counter: counterReducer
});
