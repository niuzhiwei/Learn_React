import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";

export default class User extends PureComponent {
    constructor() {
        super();
        this.state = {
            isLogin: true,
        };
    }
    render() {
        return this.state.isLogin ? (
            <div>
                <h2>User</h2>
                <h3>用户名：牛牛</h3>
            </div>
        ) : (
            <Redirect to="/login"></Redirect>
        );
    }
}
