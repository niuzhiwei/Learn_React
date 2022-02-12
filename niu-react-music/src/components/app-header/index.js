import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import { headerLinks } from "@/common/local-data";

const HYAppHeader = memo(() => {
    const showSelectItem = (item, index) => {
        if (index < 3) {
            return <NavLink to={item.link}>{item.title}</NavLink>;
        } else {
            return <a href={item.link}>{item.title}</a>;
        }
    };

    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="#/" className="logo sprite_01" />
                    <div className="select-list">
                        {headerLinks.map((item, index) => {
                            return (
                                <div key={item.title}>
                                    {showSelectItem(item, index)}
                                </div>
                            );
                        })}
                    </div>
                </HeaderLeft>
                <HeaderRight></HeaderRight>
                <NavLink to="/">发现音乐</NavLink>
                <NavLink to="/mine">我的音乐</NavLink>
                <NavLink to="/friend">我的朋友</NavLink>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    );
});

export default HYAppHeader;
