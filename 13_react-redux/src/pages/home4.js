import React, { PureComponent } from "react";
import { getHomeMultidataAction } from "../store/createActions";
import { connect } from "react-redux";

class Home extends PureComponent {
    componentDidMount() {
        this.props.getHomeMultidata();
        console.log(this.props.banners);
    }
    render() {
        return (
            <div>
                <h1>Home</h1>
                <h2>当前计数:{this.props.counter}</h2>
                {/* {this.props.banners.map((item) => {
                    return <li key={item.acm}>{item.title}</li>;
                })} */}
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
        getHomeMultidata: function () {
            dispatch(getHomeMultidataAction);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
