import React, { useEffect, useRef } from "react";

class TestCpn extends React.Component {
  render() {
    return <h2>TestCpn</h2>;
  }
}

export default function RefHookDemo01() {
  const titleRef = useRef();
  const inputRef = useRef();
  const testRef = useRef();

  function changeDOM() {
    titleRef.current.innerHTML = "Hello";
    inputRef.current.focus();
    console.log(testRef.current);
  }
  return (
    <div>
      <h2 ref={titleRef}>01_useRef引用DOM</h2>
      <input ref={inputRef} type="text" />
      <TestCpn ref={testRef}></TestCpn>

      <button onClick={() => changeDOM()}>修改DOM</button>
    </div>
  );
}
