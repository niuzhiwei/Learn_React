import React, { Component } from "react";

class Cpn extends Component {
    render() {
        return <div>我是Cpn</div>;
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
}

export default class App extends Component {
    constructor() {
        super();
        console.log("constructor");
        this.state = {
            counter: 0,
            isShow: true,
        };
    }

    render() {
        console.log("render");
        return (
            <div>
                <div>我是App组件</div>
                <h2>当前计数:{this.state.counter}</h2>
                <button onClick={() => this.increment()}>+1</button>
                <hr />
                <button onClick={() => this.changeCpn()}>切换</button>
                {this.state.isShow && <Cpn></Cpn>}
            </div>
        );
    }
    increment() {
        this.setState({
            counter: this.state.counter + 1,
        });
    }
    changeCpn() {
        this.setState({
            isShow: !this.state.isShow,
        });
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    componentDidUpdate(props, state, snapshot) {
        console.log(props);
        console.log(state);
        console.log("componentDidUpdate");
    }
}
