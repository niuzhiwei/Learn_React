import React, { PureComponent } from "react";

function renderTime(WrappedComponent) {
    return class extends PureComponent {
        UNSAFE_componentWillMount() {
            this.beginTime = Date.now();
        }
        render() {
            return <WrappedComponent {...this.props}></WrappedComponent>;
        }
        componentDidMount() {
            this.endTime = Date.now();
            console.log(
                "渲染时间" + WrappedComponent.name,
                this.endTime - this.beginTime
            );
        }
    };
}

class Home extends PureComponent {
    render() {
        return <div>Home</div>;
    }
}

class About extends PureComponent {
    render() {
        return <div>About</div>;
    }
}

const RenderHome = renderTime(Home);
const RenderAbout = renderTime(About);

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <RenderHome></RenderHome>
                <RenderAbout></RenderAbout>
            </div>
        );
    }
}
