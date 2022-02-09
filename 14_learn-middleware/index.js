import store from "./store/index.js";

import {
  addAction,
  subAction,
  incAction,
  decAction,
} from "./store/actionCreators.js";

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(addAction(10));
// store.dispatch(addAction(15));

//封装函数
// function dispatchAndLogging(action) {
//   console.log("dispatch前:", action);
//   store.dispatch(action);
//   console.log("dispatch后:", store.getState());
// }

// dispatchAndLogging(addAction(10))
// dispatchAndLogging(addAction(15))

//函数的基础之上进行优化：修改原有的dispatch
//hack技术；monkeyingpatch
// const next = store.dispatch;

// function dispatchAndLogging(action) {
//   console.log("dispatch前:", action);
//   next(action);
//   console.log("dispatch后:", store.getState());
// }

// store.dispatch = dispatchAndLogging;

// store.dispatch(addAction(10));
// store.dispatch(addAction(15));

//将之前的操作进行封装
export function patchLogging(store) {
  const next = store.dispatch;
  function dispatchAndLogging(action) {
    console.log("dispatch前:", action);
    next(action);
    console.log("dispatch后:", store.getState());
  }
  // store.dispatch = dispatchAndLogging;
  return dispatchAndLogging;
}

//封装patchThunk的功能
function patchThunk(store) {
  const next = store.dispatch;
  function dispatchAndThunk(action) {
    if (typeof action === "function") {
      action(store.dispatch, store.getState);
    } else {
      next(action);
    }
  }

  // store.dispatch = dispatchAndThunk;
  return dispatchAndThunk;
}
patchLogging(store);
patchThunk(store);
// store.dispatch(addAction(10));
// store.dispatch(addAction(15));

// function foo(dispatch, getState) {
//   console.log(dispatch);
//   console.log(getState);
//   dispatch(subAction(10));
// }
// store.dispatch(foo);

//封装applyMiddleware
function applyMiddleware(...middlewares) {
  const newMiddleware = [...middlewares];
  newMiddleware.forEach((middleware) => {
    store.dispatch = middleware(store);
  });
}
applyMiddleware(patchLogging, patchThunk);
