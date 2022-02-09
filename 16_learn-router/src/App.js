import React, { PureComponent } from "react";
import { HashRouter, NavLink, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Profile from "./pages/profile";
import User from "./pages/user";
import NoMatch from "./pages/noMatch";
import Login from "./pages/login";
import "./App.css";

class App extends PureComponent {
    constructor(props) {
        super();
        this.state = {
            links: [
                { to: "/", title: "首页" },
                { to: "/about", title: "关于" },
                { to: "/profile", title: "我的" },
            ],
            currentIndex: 0,
        };
    }
    render() {
        return (
            <div>
                <HashRouter>
                    <NavLink exact to="/">
                        首页
                    </NavLink>
                    <NavLink to="/about">关于</NavLink>
                    <NavLink to="/profile">我的</NavLink>
                    <NavLink to="/user">用户</NavLink>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/profile" component={Profile}></Route>
                        {/* <Route path="/:id" component={User}></Route> */}
                        <Route path="/user" component={User}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default App;
