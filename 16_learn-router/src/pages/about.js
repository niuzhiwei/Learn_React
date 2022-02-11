import React, { PureComponent } from "react";
import { NavLink, Switch, Route } from "react-router-dom";

function History() {
  return <h2>企业成立于1911</h2>;
}
function Culture() {
  return <h2>创新</h2>;
}
function Contact() {
  return <h2>我的电话1391231231</h2>;
}
function JoinUs() {
  return <h2>Join us</h2>;
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

        <button onClick={() => this.jumpToJoin()}>加入我们</button>

        <Switch>
          <Route exact path="/about" component={History}></Route>
          <Route path="/about/culture" component={Culture}></Route>
          <Route path="/about/contact" component={Contact}></Route>
          <Route path="/about/join" component={JoinUs}></Route>
        </Switch>

        <h2>About</h2>
      </div>
    );
  }

  jumpToJoin() {
    this.props.history.push("/about/join");
  }
}

export default About;
