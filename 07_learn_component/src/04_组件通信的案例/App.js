import React, { Component } from "react";
import TabControl from "./TabControl";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            currentTitle: "新款",
        };
        this.titles = ["新款", "精选", "流行"];
    }

    render() {
        return (
            <div>
                <TabControl
                    titles={this.titles}
                    itemClick={(title) => this.changeTitle(title)}
                />
                <h2>{this.state.currentTitle}</h2>
            </div>
        );
    }
    changeTitle(title) {
        this.setState({
            currentTitle: title,
        });
    }
}
