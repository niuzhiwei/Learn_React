import React from "react";
import { subAction } from "../store/createActions";
// import { connect } from "../utils/connect";
import { connect } from "react-redux";
function About(props) {
    return (
        <div>
            <h1>About</h1>
            <h2>当前计数,{props.counter}</h2>
            <button onClick={() => props.subNumber(1)}>-1</button>
            <button onClick={() => props.subNumber(5)}>-5</button>
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
        subNumber: function (num) {
            dispatch(subAction(num));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
