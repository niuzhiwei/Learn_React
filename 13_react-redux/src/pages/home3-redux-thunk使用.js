import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addAction, getHomeMultidataAction } from "../store/actionCreators";

class Home extends PureComponent {
  componentDidMount() {
    this.props.getHomeMultidata();
  }
  render() {
    return (
      <div>
        <div>
          <hr />
          <h1>Home</h1>
          <h2>当前计数：{this.props.counter}</h2>
          <button onClick={() => this.props.addNumber(1)}>+1</button>
        </div>
      </div>
    );
  }
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
    addNumber: function (num) {
      dispatch(addAction(num));
    },
    getHomeMultidata() {
      dispatch(getHomeMultidataAction);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
