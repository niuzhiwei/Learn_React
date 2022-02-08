const redux = require("redux");

const initialState = {
    counter: 0,
};

//reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, counter: state.counter + 1 };
        case "DECREMENT":
            return { ...state, counter: state.counter - 1 };
        case "ADD_NUMBER":
            return { ...state, counter: state.counter + action.number };
        case "SUB_NUMBER":
            return { ...state, counter: state.counter - action.number };
        default:
            return state;
    }
}

//store
const store = redux.createStore(reducer);

//订阅store修改
store.subscribe(() => {
    console.log(store.getState().counter);
});

//actions
const action1 = { type: "INCREMENT" };
const action2 = { type: "DECREMENT" };
const action3 = { type: "ADD_NUMBER", number: 5 };
const action4 = { type: "SUB_NUMBER", number: 12 };

//派发action
store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action3);
store.dispatch(action4);
