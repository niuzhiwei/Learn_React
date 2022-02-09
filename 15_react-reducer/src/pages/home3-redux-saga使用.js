import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchHomeMultidataAction } from "../store/home/actionCreators";
import { addAction } from "../store/counter/actionCreators";
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
    counter: state.counterInfo.counter,
    banners: state.homeInfo.banners,
    recommends: state.homeInfo.recommends,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNumber: function (num) {
      dispatch(addAction(num));
    },
    getHomeMultidata() {
      dispatch(fetchHomeMultidataAction);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
