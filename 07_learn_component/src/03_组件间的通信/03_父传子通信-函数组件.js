import React, { Component } from "react";

function ChildCpn(props) {
    const { name, age, height } = props;
    return <h2>子组件展示的数据:{name + age + height}</h2>;
}

export default class App extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div>
                <ChildCpn name="niu" age="18" height="1.88" />
            </div>
        );
    }
}
