import React, { PureComponent } from "react";
import {
    addAction,
    changeBannersAction,
    changeRecommendsAction,
} from "../store/createActions";
// import { connect } from "../utils/connect";
import { connect } from "react-redux";
import axios from "axios";

class Home extends PureComponent {
    async componentDidMount() {
        const res = await axios({
            url: "http://123.207.32.32:8000/home/multidata",
        });

        const data = res.data.data;
        console.log(data);
    }
    render() {
        return (
            <div>
                <h1>Home</h1>
                <h2>当前计数:{this.props.counter}</h2>
                <button onClick={() => this.props.addNumber(1)}>+1</button>
                <button onClick={() => this.props.addNumber(5)}>+5</button>
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
        changeRecommends: function (recommends) {
            dispatch(changeRecommendsAction(recommends));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
