const defauntState = { usersList: [], fetching: false, error: false };
import { ADD_USERS_INIT, ADD_USERS_FAILURE, ADD_USERS_SUCCESS, DELETE_USER, EDIT_USER } from "../actions";

function userReducer(state = defauntState, action) { // Pure function A -> B
    const payload = action.payload;
    switch (action.type) {
        case ADD_USERS_INIT: {
            let newState = { usersList: [...state.usersList], fetching: true };
            return newState;
        }
        case ADD_USERS_SUCCESS: {
            let newState = { usersList: [...state.usersList], fetching: false };
            if(Array.isArray(payload)){
                payload.forEach((item) => {
                    if(!newState.usersList.map((i) => i.id).includes(item.id)){
                        newState.usersList.push(item);
                    }
                })
            }
            return newState;
        }
        case ADD_USERS_FAILURE: {
            let newState = { usersList: [...state.usersList], fetching: false, error: true };
            return newState
        }
        case EDIT_USER: {
            let newState = { usersList: [...state.usersList] };
            let id = payload?.id;
            let index = newState.usersList.findIndex((user) => user?.id === id);
            newState.usersList[index] = { ...newState.usersList[index], ...payload }
            return newState;
        }
        case DELETE_USER:
            let newState = { usersList: [...state.usersList] };
            let id = payload?.id;
            newState.usersList = newState.usersList.filter((user) => user?.id !== id);
            return newState;
        default:
            return state
    }
}

export default userReducer;