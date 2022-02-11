import React, { useState, memo, useMemo } from "react";

const HYInfo = memo((props) => {
  console.log("HYInfo重新渲染");
  return (
    <h2>
      name:{props.info.name} age:{props.info.age}
    </h2>
  );
});

export default function MemoHookDemo02() {
  console.log("MemoHookDemo02重新渲染");
  const [show, setShow] = useState(true);
  //   const info = { name: "aaa", age: 1 };

  const info = useMemo(() => {
    return { name: "aaa", age: 1 };
  }, []);

  return (
    <div>
      <HYInfo info={info}></HYInfo>
      <button onClick={() => setShow(!show)}>show切换</button>
    </div>
  );
}
