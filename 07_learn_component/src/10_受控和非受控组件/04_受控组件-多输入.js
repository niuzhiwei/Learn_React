import React, { PureComponent } from "react";

export default class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
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
                        name="username"
                        value={this.state.username}
                        onChange={(e) => this.handleChange(e)}
                    />
                </label>

                <label htmlFor="password">
                    密码:
                    {/* 受控组件 */}
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={this.state.password}
                        onChange={(e) => this.handleChange(e)}
                    />
                </label>

                <input type="submit" value="提交"></input>
            </form>
        );
    }

    handleChange(e) {
        this.setState({
            [e.target.name-]: e.target.value,
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }
}
