import React, { PureComponent } from "react";

import styled from "styled-components";

const HomeWrapper = styled.div`
    font-size: 30px;
    color: red;
    .banner {
        background-color: blue;
        span {
            color: #fff;
            &.active {
                color: #f00;
            }
            &:hover {
                color: green;
            }
            &::after {
                content: "aaa";
            }
        }
    }
`;

const TitleWrapper = styled.h2`
    text-decoration: underline;
    color: ${(props) => props.theme.themeColor};
    font-size: ${(props) => props.theme.fontSize};
`;

export default class Home extends PureComponent {
    render() {
        return (
            <HomeWrapper>
                <TitleWrapper>Home</TitleWrapper>
                <div className="banner">
                    <span>轮播图1</span>
                    <span className="active">轮播图2</span>
                    <span>轮播图3</span>
                    <span>轮播图4</span>
                </div>
            </HomeWrapper>
        );
    }
}
