import React, { PureComponent } from "react";
import Home from "../home";
import Profile from "../profile";
import styled, { ThemeProvider } from "styled-components";

const HYButton = styled.button`
    padding: 10px 20px;
    border-color: red;
    color: red;
`;
const HYPrimaryButton = styled(HYButton)`
    color: #fff;
    background-color: green;
`;
export default class App extends PureComponent {
    render() {
        return (
            <ThemeProvider theme={{ themeColor: "yellow", fontSize: "100px" }}>
                <h2>App</h2>
                <Home></Home>
                <hr />
                <Profile></Profile>
                <HYButton>按钮</HYButton>
                <HYPrimaryButton>按钮</HYPrimaryButton>
            </ThemeProvider>
        );
    }
}
