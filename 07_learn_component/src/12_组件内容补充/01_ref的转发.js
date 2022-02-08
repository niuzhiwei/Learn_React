import React, { PureComponent, createRef, forwardRef } from "react";

class Home extends PureComponent {
    render() {
        return <h2>Home</h2>;
    }
}

const Profile = forwardRef(function (props, ref) {
    return <h2 ref={ref}>Profile</h2>;
});

export default class App extends PureComponent {
    constructor() {
        super();

        this.titleRef = createRef();
        this.homeRef = createRef();
        this.profileRef = createRef();
    }
    render() {
        return (
            <div>
                <h2 ref={this.titleRef}>Hello World</h2>
                <Home ref={this.homeRef}></Home>
                <Profile ref={this.profileRef}></Profile>
                <button onClick={() => this.printRef()}>Ref</button>
            </div>
        );
    }
    printRef() {
        console.log(this.titleRef.current);
        console.log(this.homeRef.current);
        console.log(this.profileRef.current);
    }
}
