import React, { PureComponent } from "react";

class CounterClass extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }
    render() {
        return (
            <div>
                <h2>当前计数:{this.state.counter}</h2>
                <button onClick={() => this.addCounter()}>+1</button>
                <button onClick={() => this.subCounter()}>-1</button>
            </div>
        );
    }
    addCounter() {
        this.setState({
            counter: this.state.counter + 1,
        });
    }
    subCounter() {
        this.setState({
            counter: this.state.counter - 1,
        });
    }
}

export default CounterClass;
