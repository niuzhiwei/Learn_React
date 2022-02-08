import React from "react";
import { addAction } from "../store/createActions";
import { connect } from "../utils/connect";

function Home(props) {
    return (
        <div>
            <h1>Home</h1>
            <h2>当前计数,{props.counter}</h2>
            <button onClick={() => props.addNumber(1)}>+1</button>
            <button onClick={() => props.addNumber(5)}>+5</button>
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
