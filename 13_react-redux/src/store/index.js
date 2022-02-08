import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer.js";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

//1.引入thunkMiddleware的中间件
const storeEnhancer = applyMiddleware(thunkMiddleware);
//2.创建sagaMiddleware中间件
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeEnhancers(storeEnhancer));

// sagaMiddleware.run();

export default store;
