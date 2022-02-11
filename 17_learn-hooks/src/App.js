import React, { createContext, useState } from "react";
import CounterClass from "./01_体验hooks/01_counter-class";
import CounterHook from "./01_体验hooks/02_counter-hook";
import MultiHookState from "./02_useState使用/01_多个状态和复杂状态";
import ClassCounterTitleChange from "./03_useEffect使用/01_class实现title修改";
import HookCounterTitleChange from "./03_useEffect使用/02_hook实现title修改";
import EffectHookCancelDemo from "./03_useEffect使用/03_useEffect模拟订阅和取消";
import MultiEffectHookDemo from "./03_useEffect使用/04_多useEffect一起使用";
import ContextHookDemo from "./04_useContext使用/01_useContext使用";
import Home from "./05_useReducer使用/home";
import CallbackHookDemo01 from "./06_useCallback使用/01_useCallback不能进行的性能优化";
import CallbackHookDemo02 from "./06_useCallback使用/02_useCallback进行的性能优化";
import MemoHookDemo01 from "./07_useMemo使用/01_useMemo复杂计算应用";
import MemoHookDemo02 from "./07_useMemo使用/02_useMemo传入子组件应用类型";
import RefHookDemo01 from "./08_useRef使用/01_useRef引用DOM";
import RefHookDemo02 from "./08_useRef使用/02_useRef引用其他数据";
import ForwardRefDemo from "./09_useImperativeHandle使用/01_回顾forwardRef的用法";
import UseImperativeHandleDemo from "./09_useImperativeHandle使用/02_useImperativeHandle";
import EffectCounterDemo from "./10_useLayoutEffect使用/01_useEffect的count修改";
import LayoutEffectCounterDemo from "./10_useLayoutEffect使用/02_useLayoutEffect的count修改";
import CustomHookDemo01 from "./11_自定义hook/01_认识自定义hook";
import CustomContextShareHook from "./11_自定义hook/02_自定义hook练习-context共享";
import CustomScrollPositionHook from "./11_自定义hook/03_自定义hook练习-获取滚动位置";
import LocalStorageHook from "./11_自定义hook/04_自定义hook练习-localStoreage存储";

export const UserContext = createContext();
export const ThemeContext = createContext();
export const TokenContext = createContext();

function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      {/* <CounterClass />
      <CounterHook></CounterHook>
      <MultiHookState></MultiHookState>
      <ClassCounterTitleChange></ClassCounterTitleChange>
      <HookCounterTitleChange></HookCounterTitleChange>
      {show && <EffectHookCancelDemo></EffectHookCancelDemo>}
      <button onClick={() => setShow(!show)}>Show</button>
      <MultiEffectHookDemo></MultiEffectHookDemo>
      <UserContext.Provider value={{ name: "niu", age: 18 }}>
        <ThemeContext.Provider value={{ fontSize: "30px", color: "red" }}>
          <ContextHookDemo></ContextHookDemo>
        </ThemeContext.Provider>
      </UserContext.Provider>
      <Home></Home>
      <CallbackHookDemo01></CallbackHookDemo01>
      <CallbackHookDemo02></CallbackHookDemo02>
      <MemoHookDemo01></MemoHookDemo01>
      <MemoHookDemo02></MemoHookDemo02>
      <RefHookDemo01></RefHookDemo01>
      <RefHookDemo02></RefHookDemo02>
      <ForwardRefDemo></ForwardRefDemo>
      <UseImperativeHandleDemo></UseImperativeHandleDemo>
      <EffectCounterDemo></EffectCounterDemo>
      <LayoutEffectCounterDemo></LayoutEffectCounterDemo>
      {show && <CustomHookDemo01></CustomHookDemo01>} */}

      {/* <UserContext.Provider value={{ name: "aa", age: 11 }}>
        <TokenContext.Provider value="123456">
          <CustomContextShareHook></CustomContextShareHook>
        </TokenContext.Provider>
      </UserContext.Provider> */}

      {/* <CustomScrollPositionHook></CustomScrollPositionHook> */}

      <LocalStorageHook></LocalStorageHook>

      <button onClick={() => setShow(!show)}>Show</button>
    </div>
  );
}

export default App;
