import React, { Component, PureComponent, memo } from "react";

const MemoHeader = memo(function Header() {
    console.log("header");
    return <h2>我是Header组件</h2>;
});

function Banner() {
    console.log("Banner");
    return <h3>我是Banner组件</h3>;
}

function ProductList() {
    console.log("ProductList");
    return (
        <ul>
            <li>商品列表1</li>
            <li>商品列表2</li>
            <li>商品列表3</li>
            <li>商品列表4</li>
        </ul>
    );
}

class Main extends PureComponent {
    render() {
        return (
            <div>
                <Banner />
                <ProductList />
            </div>
        );
    }
}
const MemoFooter = memo(function Footer() {
    console.log("Footer");
    return <div>我是Footer组件</div>;
});
export default class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            counter: 0,
            message: "hello",
        };
    }
    render() {
        console.log("app");
        return (
            <div>
                <h2 onClick={() => this.increment()}>{this.state.counter}</h2>
                <h2 onClick={() => this.changeText()}>{this.state.message}</h2>
                <MemoHeader />
                <Main />
                <MemoFooter />
            </div>
        );
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.state.counter !== nextState.counter) {
    //         return true;
    //     }
    //     return false;
    // }
    increment() {
        this.setState({
            counter: this.state.counter + 1,
        });
    }
    changeText() {
        this.setState({
            message: "bye",
        });
    }
}
