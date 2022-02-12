import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import { headerLinks } from "@/common/local-data";

const HYAppHeader = memo(() => {
    const showSelectItem = (item, index) => {
        if (index < 3) {
            return (
                <NavLink exact to={item.link}>
                    {item.title}
                    <i className="sprite_01 icon"></i>
                </NavLink>
            );
        } else {
            return (
                <a href={item.link}>
                    {item.title}
                    <i className="sprite_01 icon"></i>
                </a>
            );
        }
    };

    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="#/" className="logo sprite_01">
                        网易云音乐
                    </a>
                    <div className="select-list">
                        {headerLinks.map((item, index) => {
                            return (
                                <div className="select-item" key={item.title}>
                                    {showSelectItem(item, index)}
                                </div>
                            );
                        })}
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input
                        className="search"
                        placeholder="音乐视频电台用户"
                        prefix={<SearchOutlined />}
                    ></Input>
                    <div className="center">创作者中心</div>
                    <div className="center">登录</div>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    );
});

export default HYAppHeader;
