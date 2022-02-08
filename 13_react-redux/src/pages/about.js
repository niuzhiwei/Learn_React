import React, { PureComponent } from "react";
import store from "../store/index";
import { subAction } from "../store/createActions";

export default class About extends PureComponent {
    constructor() {
        super();
        this.state = {
            counter: store.getState().counter,
        };
    }
    componentDidMount() {
        this.unSubscribe = store.subscribe(() => {
            this.setState({
                counter: store.getState().counter,
            });
        });
    }
    componentWillUnmount() {
        this.unSubscribe();
    }
    render() {
        const { counter } = this.state;
        return (
            <div>
                <h1>About</h1>
                <h2>当前计数,{counter}</h2>
                <button onClick={() => this.subNumber(1)}>-1</button>
                <button onClick={() => this.subNumber(5)}>-5</button>
            </div>
        );
    }
    subNumber(num) {
        store.dispatch(subAction(num));
    }
}
