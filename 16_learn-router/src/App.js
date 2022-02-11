import React, { PureComponent } from "react";
import { NavLink, Route, Switch, withRouter } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Profile from "./pages/profile";
import User from "./pages/user";
import NoMatch from "./pages/noMatch";
import Login from "./pages/login";
import Product from "./pages/product";
import Detail from "./pages/detail";
import Detail2 from "./pages/detail2";
import Detail3 from "./pages/detail3";
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
    const info = { name: "niu", age: 18 };
    return (
      <div>
        <NavLink exact to="/">
          首页
        </NavLink>
        <NavLink to="/about">关于</NavLink>
        <NavLink to="/profile">我的</NavLink>
        <NavLink to="/user">用户</NavLink>
        <NavLink to="/detail/abc">详情</NavLink>
        <NavLink to="/detail2?name=niu&age=18">详情2</NavLink>
        <NavLink to={{ pathname: "/detail3", state: info }}>详情3</NavLink>

        <button onClick={() => this.jumpToProduct()}>商品</button>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/product" component={Product}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
          <Route path="/detail2" component={Detail2}></Route>
          <Route path="/detail3" component={Detail3}></Route>
          <Route component={NoMatch}></Route>
        </Switch>
      </div>
    );
  }
  jumpToProduct() {
    console.log(this.props);
    this.props.history.push("/product");
  }
}

export default withRouter(App);
