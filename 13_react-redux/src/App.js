import React, { PureComponent } from "react";
import Home from "./pages/home4";
import About from "./pages/about3";

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <Home></Home>
                <hr />
                <About></About>
            </div>
        );
    }
}
