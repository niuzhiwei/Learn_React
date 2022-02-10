import { useState } from "react";
function CounterHook() {
    const [counter, setCounter] = useState(() => 10);
    function handleBtnClick() {
        setCounter((prevCount) => prevCount - 10);
        setCounter((prevCount) => prevCount - 10);
        setCounter((prevCount) => prevCount - 10);
    }
    return (
        <div>
            <h2>当前计数:{counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>+1</button>
            <button onClick={() => setCounter(counter - 1)}>-1</button>
            <button onClick={() => setCounter((prevCount) => prevCount + 10)}>
                +10
            </button>
            <button onClick={handleBtnClick}>-10</button>
        </div>
    );
}
export default CounterHook;
