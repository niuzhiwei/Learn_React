import React, { useState, useMemo } from "react";

function calcNumber(count) {
  let total = 0;
  for (let i = 0; i <= count; i++) {
    console.log("重新计算");
    total += i;
  }
  return total;
}

export default function MemoHookDemo01() {
  const [count, setCount] = useState(10);
  const [show, setShow] = useState(true);

  const total = useMemo(() => {
    return calcNumber(count);
  }, [count]);

  return (
    <div>
      <h2>sum:{total}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setShow(!show)}>show切换</button>
    </div>
  );
}
