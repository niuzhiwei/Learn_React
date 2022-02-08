import React, { PureComponent } from "react";
import { createRef } from "react/cjs/react.development";

export default class App extends PureComponent {
    constructor() {
        super();
        this.inputRef = createRef();
    }
    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label htmlFor="username">
                    用户:
                    {/* 受控组件 */}
                    <input type="text" id="username" ref={this.inputRef} />
                </label>

                <input type="submit" value="提交"></input>
            </form>
        );
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.inputRef.current.value);
    }
}
