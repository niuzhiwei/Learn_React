import React, { PureComponent } from "react";
import { NavLink, Switch, Route } from "react-router-dom";

function History() {
    return <h2>企业成立于1911</h2>;
}
function Cultrue() {
    return <h2>创新</h2>;
}
function Contact() {
    return <h2>我的电话1391231231</h2>;
}

export class About extends PureComponent {
    render() {
        return (
            <div>
                <NavLink exact to="/about">
                    企业历史
                </NavLink>
                <NavLink to="/about/culture">企业文化</NavLink>
                <NavLink to="/about/contact">联系我们</NavLink>

                <Switch>
                    <Route exact path="/about" component={History}></Route>
                    <Route path="/about/culture" component={Cultrue}></Route>
                    <Route path="/about/contact" component={Contact}></Route>
                </Switch>

                <h2>About</h2>
            </div>
        );
    }
}

export default About;
