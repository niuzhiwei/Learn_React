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

export const UserContext = createContext();
export const ThemeContext = createContext();

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
                <ThemeContext.Provider
                    value={{ fontSize: "30px", color: "red" }}
                >
                    <ContextHookDemo></ContextHookDemo>
                </ThemeContext.Provider>
            </UserContext.Provider> */}

            <Home></Home>
        </div>
    );
}

export default App;
