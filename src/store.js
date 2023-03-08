import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/index'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware();
import usersSaga from "./sagas/users-saga";
function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

let store = createStore(
  reducer,
  applyMiddleware(logger, sagaMiddleware)
  );

sagaMiddleware.run(usersSaga)

export default store