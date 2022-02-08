import React, { PureComponent } from "react";

class App extends PureComponent {
    render() {
        return <div>App</div>;
    }
}
App.displayName = "Niu";

// function enhanceComponent(WrappedComponent) {
//     return class NewComponent extends PureComponent {
//         render() {
//             return <WrappedComponent></WrappedComponent>;
//         }
//     };
// }

function enhanceComponent(WrappedComponent) {
    function NewComponent(props) {
        return <WrappedComponent {...props} />;
    }
    return NewComponent;
}

const EnhanceComponent = enhanceComponent(App);

export default enhanceComponent(EnhanceComponent);
