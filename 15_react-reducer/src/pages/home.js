import React, { PureComponent } from "react";
import { connect } from "../utils/connect";
import { addAction } from "../store/actionCreators";

function Home(props) {
  return (
    <div>
      <div>
        <hr />
        <h1>Home</h1>
        <h2>当前计数：{props.counter}</h2>
        <button onClick={() => props.addNumber(1)}>+1</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNumber: function (num) {
      dispatch(addAction(num));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
