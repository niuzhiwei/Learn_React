import React, { useState, useEffect } from "react";

export default function EffectCounterDemo() {
  const [count, setCount] = useState(10);
  useEffect(() => {
    if (count === 0) {
      setCount(Math.random());
    }
  }, [count]);
  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={() => setCount(0)}>修改数字</button>
    </div>
  );
}
