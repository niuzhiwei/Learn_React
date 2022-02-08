import React, { PureComponent } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export default class SwitchTransitionDemo extends PureComponent {
    constructor() {
        super();
        this.state = {
            isOn: true,
        };
    }
    render() {
        const { isOn } = this.state;
        return (
            <div>
                <SwitchTransition mode="out-in">
                    <CSSTransition
                        key={isOn ? "on" : "off"}
                        classNames="btn"
                        timeout={1000}
                    >
                        <button onClick={() => this.setState({ isOn: !isOn })}>
                            {isOn ? "on" : "off"}
                        </button>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        );
    }
}
