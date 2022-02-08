import React, { Component } from "react";

class CounterButton extends Component {
    render() {
        return <button onClick={this.props.btnClick}>+1</button>;
    }
}

export default class App extends Component {
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
                <button onClick={() => this.increment()}>+</button>
                <CounterButton btnClick={() => this.increment()} />
            </div>
        );
    }
    increment() {
        this.setState({
            counter: this.state.counter + 1,
        });
    }
}
