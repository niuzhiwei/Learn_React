import React, { PureComponent } from "react";
import styled from "styled-components";

const HYInput = styled.input.attrs({
    placeholder: "niuniu",
    borderColor: "purple",
})`
    background: lightblue;
    border-color: ${(props) => props.borderColor};
    color: ${(props) => props.color};
`;

export default class Profile extends PureComponent {
    constructor() {
        super();
        this.state = {
            color: "red",
        };
    }
    render() {
        return (
            <div>
                <HYInput type="password" color={this.state.color} />
                <br />
                <HYInput type="text" color={this.state.color} />
                <h2>Profile</h2>
                <ul>
                    <li>设置列表1</li>
                    <li>设置列表2</li>
                    <li>设置列表3</li>
                </ul>
            </div>
        );
    }
}
