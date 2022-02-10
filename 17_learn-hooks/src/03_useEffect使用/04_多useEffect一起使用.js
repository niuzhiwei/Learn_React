import React, { useEffect, useState } from "react";

export default function MultiEffectHookDemo() {
    const [count, setCount] = useState(0);
    const [isLogin, setLogin] = useState(true);
    useEffect(() => {
        console.log("修改DOM");
    }, [count]);
    useEffect(() => {
        console.log("订阅事件");
    }, []);
    useEffect(() => {
        console.log("发送请求");
    }, []);
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setLogin(!isLogin)}>Login</button>
        </div>
    );
}
