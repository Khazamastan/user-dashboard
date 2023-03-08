import { INCREMENT, DECREMENT } from "../actions";

const defauntState =  { value: 0};
function counterReducer(state = defauntState, action) { // Pure function A -> B
    switch (action.type) {
      case INCREMENT:
        return { value: state.value + 1 }
      case DECREMENT:
        return { value: state.value - 1 }
      default:
        return state
    }
  }

  export default counterReducer;