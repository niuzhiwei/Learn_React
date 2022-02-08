import React, { PureComponent, createContext } from "react";

const UserContext = createContext({
    nickname: "",
    level: -1,
    region: "China",
});
function withUser(WrappedComponent) {
    return (props) => {
        return (
            <UserContext.Consumer>
                {(user) => {
                    return (
                        <WrappedComponent
                            {...props}
                            {...user}
                        ></WrappedComponent>
                    );
                }}
            </UserContext.Consumer>
        );
    };
}

class Home extends PureComponent {
    render() {
        return (
            <h2>
                Home:
                {this.props.nickname +
                    " " +
                    this.props.level +
                    " " +
                    this.props.region}
            </h2>
        );
    }
}
class About extends PureComponent {
    render() {
        return (
            <h2>
                About:
                {this.props.nickname +
                    " " +
                    this.props.level +
                    " " +
                    this.props.region}
            </h2>
        );
    }
}

const UserHome = withUser(Home);
const UserAbout = withUser(About);

export default class App extends PureComponent {
    render() {
        return (
            <div>
                App
                <UserContext.Provider
                    value={{ nickname: "niu", level: 101, region: "China" }}
                >
                    <UserHome></UserHome>
                    <UserAbout></UserAbout>
                </UserContext.Provider>
            </div>
        );
    }
}
