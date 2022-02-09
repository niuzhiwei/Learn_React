import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  addAction,
  changeBannersAction,
  changeRecommendsAction,
} from "../store/actionCreators";
import axios from "axios";

class Home extends PureComponent {
  async componentDidMount() {
    const res = await axios({
      url: "http://123.207.32.32:8000/home/multidata",
    });
    const data = res.data.data;
    this.props.changeBanners(data.banner.list);
    this.props.changeRecommends(data.recommend.list);
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
    changeBanners: function (banners) {
      dispatch(changeBannersAction(banners));
    },
    changeRecommends: function (recommnends) {
      dispatch(changeRecommendsAction(recommnends));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
