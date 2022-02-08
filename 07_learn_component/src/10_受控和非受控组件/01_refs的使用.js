import React, { PureComponent, createRef } from "react";

class Counter extends PureComponent {
    constructor() {
        super();
        this.state = {
            counter: 0,
        };
    }
    render() {
        return (
            <div>
                <h2>当前计数:{this.state.counter}</h2>
                <button onClick={() => this.increment()}>+</button>
            </div>
        );
    }
    increment() {
        this.setState({
            counter: this.state.counter + 1,
        });
    }
}

export default class App extends PureComponent {
    constructor() {
        super();
        this.titleRef = createRef();
        this.counterRef = createRef();
        this.titleEl = null;
    }
    render() {
        return (
            <div>
                <h2 ref="titleRef">Hello React</h2>
                {/* React推荐 */}
                <h2 ref={this.titleRef}>Hello React</h2>
                <h2
                    ref={(arg) => {
                        this.titleEl = arg;
                    }}
                >
                    Hello React
                </h2>
                <button onClick={() => this.changeText()}>改变文本</button>

                <hr></hr>
                <Counter ref={this.counterRef} />
                <button onClick={() => this.btnClick()}>App按钮</button>
            </div>
        );
    }
    changeText() {
        //1.字符串
        this.refs.titleRef.innerHTML = "吃饭啦";
        //2.对象
        this.titleRef.current.innerHTML = "睡觉啦";
        //3.函数
        this.titleEl.innerHTML = "洗澡啦";
    }
    btnClick() {
        this.counterRef.current.increment();
    }
}
