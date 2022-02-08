import React, { PureComponent } from "react";

function enhanceRegionProps(WrappedComponent) {
    return (props) => {
        return <WrappedComponent {...props} region="中国"></WrappedComponent>;
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

const EnhanceHome = enhanceRegionProps(Home);

class About extends PureComponent {
    render() {
        return (
            <h2>
                Home:{" "}
                {this.props.nickname +
                    " " +
                    this.props.level +
                    " " +
                    this.props.region}
            </h2>
        );
    }
}
const EnhanceAbout = enhanceRegionProps(About);

export default class App extends PureComponent {
    render() {
        return (
            <div>
                App
                <EnhanceHome nickname="niuniu" level={99}></EnhanceHome>
                <EnhanceAbout nickname="zhuzhu" level={98}></EnhanceAbout>
            </div>
        );
    }
}
