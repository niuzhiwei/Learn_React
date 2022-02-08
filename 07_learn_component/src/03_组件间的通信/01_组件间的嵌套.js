import React, { Component } from "react";

function Header() {
    return <h2>我是Header</h2>;
}
function Main() {
    return <h2>我是Main</h2>;
}
function Footer() {
    return <h2>我是Footer</h2>;
}
export default class App extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </div>
        );
    }
}
