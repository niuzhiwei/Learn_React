import React, { useState, useCallback, useMemo, memo } from "react";

/**
 * useCallback在什么时候使用？
 * 场景：在将一个组件中的函数，传递给子元素进行回调使用时，使用useCallback对函数进行处理
 */

const HYButton = memo((props) => {
  console.log("button重新渲染" + props.title);
  return <button onClick={props.increment}>HYButton+1</button>;
});

export default function CallbackHookDemo02() {
  console.log("demo重新渲染");
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const increment = () => {
    setCount(count + 1);
  };

  const increment2 = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const increment3 = useMemo(() => {
    return () => {
      console.log("执行increment3");
      setCount(count + 1);
    };
  }, [count]);

  return (
    <div>
      <h2>{count}</h2>
      <HYButton title="btn1" increment={increment}>
        +1
      </HYButton>
      <HYButton title="btn2" increment={increment2}>
        +1
      </HYButton>
      <HYButton title="btn3" increment={increment3}>
        +1
      </HYButton>
      <button onClick={() => setShow(!show)}>show切换</button>
    </div>
  );
}
