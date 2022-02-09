import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";
import saga from "./saga";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

//1.引入thunkMiddleware中间件
//2.创建sagaMiddleware中间件
const sagaMiddleware = createSagaMiddleware();
const storeEnhancer = applyMiddleware(thunkMiddleware, sagaMiddleware);

const store = createStore(reducer, composeEnhancers(storeEnhancer));

sagaMiddleware.run(saga);

export default store;
