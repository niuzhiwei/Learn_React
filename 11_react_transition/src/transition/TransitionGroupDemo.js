import React, { PureComponent } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
export default class TransitionGroupDemo extends PureComponent {
    constructor() {
        super();
        this.state = {
            names: ["niu", "zhu", "mao"],
        };
    }
    render() {
        return (
            <TransitionGroup>
                {this.state.names.map((item, index) => {
                    return (
                        <CSSTransition
                            key={index}
                            timeout={500}
                            classNames="name"
                        >
                            <div>{item}</div>
                        </CSSTransition>
                    );
                })}

                <button onClick={() => this.addName()}>name</button>
            </TransitionGroup>
        );
    }
    addName() {
        this.setState({
            names: [...this.state.names, "dog"],
        });
    }
}
