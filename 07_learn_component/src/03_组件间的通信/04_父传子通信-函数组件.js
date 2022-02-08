import React, { Component } from "react";
import PropType from "prop-types";

function ChildCpn(props) {
    const { name, age, height, names } = props;
    return (
        <div>
            <h2>子组件展示的数据:{name + age + height}</h2>
            <ul>
                {names.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
        </div>
    );
}

ChildCpn.propTypes = {
    name: PropType.string,
    age: PropType.number,
    height: PropType.number,
    names: PropType.array.isRequired,
};
ChildCpn.defaultProps = {
    name: "zhu",
};

export default class App extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div>
                <ChildCpn age={18} height={1.88} names={["1", "2"]} />
            </div>
        );
    }
}
