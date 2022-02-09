import { ADD_NUMBER, SUB_NUMBER } from "./constants";

//拆分counterReducer
const defaultCounterState = {
  counter: 0,
};
function counterReducer(state = defaultCounterState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    default:
      return state;
  }
}
export default counterReducer;
