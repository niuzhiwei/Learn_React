import React, { PureComponent } from "react";

export default class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            username: "",
        };
    }
    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label htmlFor="username">
                    用户:
                    {/* 受控组件 */}
                    <input
                        type="text"
                        id="username"
                        value={this.state.username}
                        onChange={(e) => this.handleChange(e)}
                    />
                </label>

                <input type="submit" value="提交"></input>
            </form>
        );
    }
    handleChange(e) {
        this.setState({
            username: e.target.value,
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.username);
    }
}
