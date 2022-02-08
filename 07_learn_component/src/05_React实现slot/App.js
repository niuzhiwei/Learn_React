import React, { Component } from "react";
import NavBar from "./NavBar";

export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar
                    leftSlot={<span>aaa</span>}
                    centerSlot={<strong>bbb</strong>}
                    rightSlot={<a href="xxx">ccc</a>}
                ></NavBar>
            </div>
        );
    }
}
