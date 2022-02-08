import React, { PureComponent } from "react";
import CSSTransitionDemo from "./transition/CSSTransitionDemo";
import SwitchTransitionDemo from "./transition/SwitchTransitionDemo";
import TransitionGroupDemo from "./transition/TransitionGroupDemo";
import "./transition/CSSTransition.css";
import "./transition/SwitchTransition.css";
import "./transition/TranstionGroup.css";

export default class App extends PureComponent {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <TransitionGroupDemo></TransitionGroupDemo>
                <SwitchTransitionDemo></SwitchTransitionDemo>
                <CSSTransitionDemo></CSSTransitionDemo>
            </div>
        );
    }
}
