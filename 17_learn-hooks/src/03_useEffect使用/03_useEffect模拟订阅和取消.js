import React, { useEffect, useState } from "react";

export default function EffectHookCancelDemo() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("订阅");
        return () => {
            console.log("取消订阅");
        };
    }, []);
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}
