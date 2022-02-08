import React, { PureComponent } from "react";

export default class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            color: "purple",
        };
    }
    render() {
        const pStyle = {
            color: this.state.color,
            textDecoration: "underline",
        };
        return (
            <div>
                <h2 style={{ fontSize: "50px", color: "red" }}>我是标题</h2>
                <p style={pStyle}>我的一段文字啦</p>
            </div>
        );
    }
}
