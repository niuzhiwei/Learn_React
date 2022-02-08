import React, { Component } from "react";

class ChildCpn extends Component {
    render() {
        const { name, age, height } = this.props;
        return (
            <h2 onClick={() => this.test()}>
                子组件展示的数据:{name + age + height}
            </h2>
        );
    }
    test() {
        console.log(this.props);
    }
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <ChildCpn name="niu" age="18" height="1.88" />
            </div>
        );
    }
}
