import React, { PureComponent } from "react";
import { EventEmitter } from "events";

const eventBus = new EventEmitter();

class Home extends PureComponent {
    componentDidMount() {
        eventBus.addListener("hello", (e) => {
            console.log(e);
        });
    }
    componentWillUnmount() {
        eventBus.removeListener("hello");
    }
    render() {
        return (
            <div>
                <h2>Home</h2>
                <button>Home 按钮</button>
            </div>
        );
    }
}
class Profile extends PureComponent {
    render() {
        return (
            <div>
                <h2>Profile</h2>
                <button onClick={() => this.emmitEvent()}>Profile 按钮</button>
            </div>
        );
    }
    emmitEvent() {
        eventBus.emit("hello", "hello home");
    }
}

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <Home />
                <Profile />
            </div>
        );
    }
}
