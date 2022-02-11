import React, { useRef, forwardRef, useImperativeHandle } from "react";

const HYInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        console.log("focus");
        inputRef.current.focus();
      },
    }),
    [inputRef]
  );
  return <input ref={inputRef} type="text" />;
});

export default function UseImperativeHandleDemo() {
  const inputRef = useRef();
  return (
    <div>
      <HYInput ref={inputRef}></HYInput>
      <button onClick={() => inputRef.current.focus()}>聚焦</button>
    </div>
  );
}
