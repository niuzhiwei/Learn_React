import React, { PureComponent } from "react";
import store from "../store/index";
import { addAction } from "../store/createActions";

export default class Home extends PureComponent {
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
                <h1>Home</h1>
                <h2>当前计数,{counter}</h2>
                <button onClick={() => this.addNumber(1)}>+1</button>
                <button onClick={() => this.addNumber(5)}>+5</button>
            </div>
        );
    }
    addNumber(num) {
        store.dispatch(addAction(num));
    }
}
