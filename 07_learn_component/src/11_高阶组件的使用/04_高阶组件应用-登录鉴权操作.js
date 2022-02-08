import React, { PureComponent } from "react";

function withAuth(WrappedComponent) {
    return (props) => {
        const { isLogin } = props;
        return (
            <>
                {isLogin ? (
                    <WrappedComponent {...props}></WrappedComponent>
                ) : (
                    <LoginPage></LoginPage>
                )}
            </>
        );
    };
}

class CartPage extends PureComponent {
    render() {
        return <h2>CartPage</h2>;
    }
}
class LoginPage extends PureComponent {
    render() {
        return <h2>LoginPage</h2>;
    }
}

const AuthCart = withAuth(CartPage);

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <AuthCart isLogin={false}></AuthCart>
            </div>
        );
    }
}
