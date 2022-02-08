import React, { PureComponent } from "react";

export default class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            fruit: "app",
        };
    }
    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label htmlFor="fruits">
                    水果：
                    <select
                        name="fruits"
                        id="fruits"
                        value={this.state.fruit}
                        onChange={(e) => this.handleChange(e)}
                    >
                        <option value="apple">苹果</option>
                        <option value="banana">香蕉</option>
                        <option value="orange">橘子</option>
                    </select>
                </label>

                <input type="submit" value="提交" />
            </form>
        );
    }
    handleChange(e) {
        this.setState({
            fruit: e.target.value,
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.fruit);
    }
}
