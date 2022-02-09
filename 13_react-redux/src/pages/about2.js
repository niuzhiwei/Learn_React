import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { subAction } from "../store/actionCreators";

function About(props) {
  return (
    <div>
      <hr />
      <h1>About</h1>
      <h2>当前计数：{props.counter}</h2>
      <button onClick={() => props.subNumber(1)}>-1</button>
      <h2>Banners</h2>
      <ul>
        {props.banners.map((item) => {
          return <li key={item.acm}>{item.title}</li>;
        })}
      </ul>
      <h2>Recommends</h2>
      <ul>
        {props.recommends.map((item) => {
          return <li key={item.acm}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    subNumber: function (num) {
      dispatch(subAction(num));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
