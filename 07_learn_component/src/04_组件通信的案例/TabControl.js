import React, { Component } from "react";
import PropTypes from "prop-types";
import "./tabcontrol.css";


export default class TabControl extends Component {
    constructor() {
        super();
        this.state = {
            currentIndex: 0,
        };
    }

    render() {
        const { titles } = this.props;
        const { currentIndex } = this.state;
        return (
            <div className="tab-control">
                {titles.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={
                                "tab-item " +
                                (currentIndex === index ? "active" : "")
                            }
                            onClick={() => {
                                this.itemClick(index);
                            }}
                        >
                            <span> {item}</span>
                        </div>
                    );
                })}
            </div>
        );
    }
    itemClick(index) {
        this.setState({
            currentIndex: index,
        });

        const { itemClick } = this.props;
        itemClick(this.props.titles[index]);
    }
}
TabControl.propTypes = {
    titles: PropTypes.array.isRequired,
};
