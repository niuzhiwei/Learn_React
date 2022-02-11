import React, { useState, useCallback } from "react";

export default function CallbackHookDemo01() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  //每次执行都会重新定义函数，没有性能优化
  const increment2 = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={increment2}>+1</button>
    </div>
  );
}
