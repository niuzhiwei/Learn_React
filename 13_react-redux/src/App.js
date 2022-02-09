import React, { PureComponent } from "react";
import Home from "./pages/home3-redux-saga使用";
import About from "./pages/about2";
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home></Home>
        <About></About>
      </div>
    );
  }
}
